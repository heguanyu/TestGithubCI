Pod::Spec.new do |spec|
  spec.name              = "TestGithubCI"
  spec.version           = "0.3.15"
  spec.summary           = "Testing Github actions for IOS SDK build and deployment features"

  spec.description       = <<-DESC
    Testing Github actions for IOS SDK build and deployment features. Includes a XCFramework and a sample app that calls function in it.
  DESC
  spec.homepage          = "https://github.com/heguanyu/TestGithubCI"
  spec.documentation_url = "https://github.com/heguanyu/TestGithubCI/blob/main/README.md"
  spec.license           = { :type => "Apache 2.0", :file => "LICENSE" }
  spec.author            = { "Guanyu He" => "ghe@linkedin.com" }

  spec.platform              = :ios
  spec.ios.deployment_target = "13.0"
  spec.swift_version         = "5.0"

  spec.source            = {
    :http=> "https://github.com/heguanyu/TestGithubCI/releases/download/#{spec.version}/TestXCFramework.xcframework.zip"
  }
  spec.vendored_frameworks =  "TestXCFramework.xcframework"
end
