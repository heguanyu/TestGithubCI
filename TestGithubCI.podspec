Pod::Spec.new do |spec|
  spec.name              = "TestGithubCI"
  spec.version           = "0.0.1"
  spec.summary           = "Testing Github actions for IOS SDK build and deployment features"

  spec.description       = <<-DESC
    Testing Github actions for IOS SDK build and deployment features
  DESC
  spec.homepage          = "https://github.com/heguanyu/TestGithubCI"
  spec.documentation_url = "https://github.com/heguanyu/TestGithubCI/blob/main/README.md"
  spec.license           = { :type => "Apache 2.0", :file => "LICENSE" }
  spec.author            = { "Guanyu He" => "ghe@linkedin.com" }

  spec.platform              = :ios
  spec.ios.deployment_target = "13.0"
  spec.swift_version         = "5.0"
  spec.static_framework      = true # Required by Google Sdk

  spec.source            = {
    :git => "https://github.com/heguanyu/TestGithubCI.git",
    :tag => "main"
  }

  spec.requires_arc      = true
  spec.default_subspecs  = "sdk"

  spec.subspec "sdk" do |sdk|
    sdk.source_files         = "TestGithubCI/**/*.{h,m,swift}"
    sdk.public_header_files  = "TestGithubCI/**/*.h"
    sdk.weak_frameworks      = "WebKit"
  end
end