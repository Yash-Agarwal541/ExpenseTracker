
$ErrorActionPreference = "Stop"

try {
    $inputJson = [Console]::In.ReadToEnd()
    $event = $inputJson | ConvertFrom-Json

    $sessionId = $event.sessionId
    if (-not $sessionId) {
        $sessionId = "Unknown"
    }

    $stopReason = $event.stopReason
    if (-not $stopReason) {
        $stopReason = "Unknown"
    }

    $logPath = Join-Path $PSScriptRoot "hook-activity.log"

    $logEntry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') | AGENT_STOP | SESSION: $sessionId | REASON: $stopReason"

    Add-Content -Path $logPath -Value $logEntry

    Write-Output "{}"
}
catch {
    [Console]::Error.WriteLine($_.Exception.Message)
    Write-Output "{}"
}
