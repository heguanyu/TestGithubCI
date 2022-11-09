workspace 'TestGithubCI.xcworkspace'
project 'TestGithubCI'

platform :ios, '13.0'

# use_frameworks!

target 'TestGithubCI' do
end
target 'Core' do
end
target 'CoreTests' do
end
target 'MLFoundations' do
end
target 'MLFoundationsTests' do
end
target 'TestXCFramework' do
#   pod 'ZIPFoundation', '~> 0.9'
#  pod 'TensorFlowLiteSwift'
end
# Development tools
pod 'SwiftLint'
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['GCC_WARN_INHIBIT_ALL_WARNINGS'] = 'YES'
    end
  end
end
