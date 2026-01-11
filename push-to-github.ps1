# Quick script to create GitHub repo and push code
# Make sure you've authenticated first: gh auth login

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "Creating GitHub repository and pushing code..." -ForegroundColor Green

# Rename branch to main if needed (GitHub's default)
git branch -M main

# Create repo and push
gh repo create landing-page --public --source=. --remote=origin --push

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Success! Your repository is live at:" -ForegroundColor Green
    Write-Host "https://github.com/MohamedSaqib16/landing-page" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Error occurred. Make sure you're authenticated:" -ForegroundColor Red
    Write-Host "Run: gh auth login" -ForegroundColor Yellow
}
