Pod::Spec.new do |spec|
  spec.name              = "TestGithubCI"
  spec.version           = "0.3.0"
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
    :http=> "https://github.com/heguanyu/TestGithubCI/releases/download/#{spec.version}/TestGithubCI-#{spec.version}.zip"
  }
  spec.vendored_frameworks = "Core-#{spec.version}/Core.xcframework", "TestXCFramework-#{spec.version}/TestXCFramework.xcframework", "MLFoundations-#{spec.version}/MLFoundations.xcframework"
end
