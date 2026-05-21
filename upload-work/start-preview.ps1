$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8097
$url = "http://127.0.0.1:$port/"

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".svg" = "image/svg+xml"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
}

function Send-Response {
  param(
    [System.Net.Sockets.NetworkStream] $Stream,
    [int] $StatusCode,
    [string] $StatusText,
    [string] $ContentType,
    [byte[]] $Body
  )

  $headers = @(
    "HTTP/1.1 $StatusCode $StatusText",
    "Content-Type: $ContentType",
    "Content-Length: $($Body.Length)",
    "Cache-Control: no-store",
    "Connection: close",
    "",
    ""
  ) -join "`r`n"

  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  $Stream.Write($Body, 0, $Body.Length)
}

try {
  $server = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $port)
  $server.Start()
} catch {
  Write-Host ""
  Write-Host "无法启动本地预览服务。" -ForegroundColor Red
  Write-Host "8097 端口可能已经被占用。请关闭旧的预览窗口，或重启 Codex 后再运行。" -ForegroundColor Yellow
  Write-Host $_.Exception.Message -ForegroundColor DarkGray
  Read-Host "按 Enter 退出"
  exit 1
}

Write-Host ""
Write-Host "Suno 音乐英文训练器已启动：" -ForegroundColor Green
Write-Host $url -ForegroundColor Cyan
Write-Host ""
Write-Host "保持这个窗口打开，网页就能访问。关闭这个窗口，预览服务也会停止。" -ForegroundColor Yellow
Write-Host ""

while ($true) {
  $client = $null
  $stream = $null
  try {
    $client = $server.AcceptTcpClient()
    $stream = $client.GetStream()

    $buffer = New-Object byte[] 4096
    $count = $stream.Read($buffer, 0, $buffer.Length)
    if ($count -le 0) {
      continue
    }

    $request = [System.Text.Encoding]::ASCII.GetString($buffer, 0, $count)
    $firstLine = ($request -split "`r?`n")[0]
    $parts = $firstLine -split " "
    if ($parts.Length -lt 2) {
      $body = [System.Text.Encoding]::UTF8.GetBytes("bad request")
      Send-Response $stream 400 "Bad Request" "text/plain; charset=utf-8" $body
      continue
    }

    $path = [System.Uri]::UnescapeDataString(($parts[1] -split "\?")[0])
    if ($path -eq "/") {
      $path = "/index.html"
    }

    $relative = $path.TrimStart("/")
    $file = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($root, $relative))
    $rootFull = [System.IO.Path]::GetFullPath($root)

    if (-not $file.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
      $body = [System.Text.Encoding]::UTF8.GetBytes("forbidden")
      Send-Response $stream 403 "Forbidden" "text/plain; charset=utf-8" $body
    } elseif (Test-Path -LiteralPath $file -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($file).ToLowerInvariant()
      if ($contentTypes.ContainsKey($ext)) {
        $contentType = $contentTypes[$ext]
      } else {
        $contentType = "application/octet-stream"
      }
      $body = [System.IO.File]::ReadAllBytes($file)
      Send-Response $stream 200 "OK" $contentType $body
    } else {
      $body = [System.Text.Encoding]::UTF8.GetBytes("not found")
      Send-Response $stream 404 "Not Found" "text/plain; charset=utf-8" $body
    }
  } catch {
    Write-Host $_.Exception.Message -ForegroundColor DarkGray
  } finally {
    if ($stream) { $stream.Close() }
    if ($client) { $client.Close() }
  }
}
