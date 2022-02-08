platform :ios, '13.0'
workspace 'TestGithubCI.xcworkspace'
# target 'TestXCFramework' do
# #   use_frameworks!
# end

# Development tools
pod 'SwiftLint'
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['GCC_WARN_INHIBIT_ALL_WARNINGS'] = 'YES'
    end
  end
end