# GitHub Repository Setup Script
# Run this after authenticating with GitHub CLI

Write-Host "Setting up GitHub repository..." -ForegroundColor Green

# Refresh PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Check if authenticated
Write-Host "Checking GitHub authentication..." -ForegroundColor Yellow
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please authenticate first by running: gh auth login" -ForegroundColor Red
    exit 1
}

# Create the repository and push
Write-Host "Creating GitHub repository 'landing-page'..." -ForegroundColor Yellow
gh repo create landing-page --public --source=. --remote=origin --push

if ($LASTEXITCODE -eq 0) {
    Write-Host "Successfully created and pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository URL: https://github.com/MohamedSaqib16/landing-page" -ForegroundColor Cyan
} else {
    Write-Host "Failed to create repository. Please check the error above." -ForegroundColor Red
}
