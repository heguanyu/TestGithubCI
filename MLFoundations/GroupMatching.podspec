#
#  Be sure to run `pod spec lint GroupMatching.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#
#  To learn more about Podspec attributes see https://guides.cocoapods.org/syntax/podspec.html
#  To see working Podspecs in the CocoaPods repo see https://github.com/CocoaPods/Specs/
#
Pod::Spec.new do |spec|

  spec.name         = "GroupMatching"
  spec.version      = "0.0.1"
  spec.summary      = "Group Matching functionalities of LinkedinAudienceNetwork"
  spec.description  = <<-DESC
                      Provides privacy, brand-safe advertising solutions on LinkedIn's Audience Network.
                      Functionality includes adding bidding on Linkedin's Network with mediation platforms such as AppLovin Max, MoPub, and Admob.
                      Future solutions will include ad personalization, audience matching, attribution, measurement and more."
                      DESC
  spec.homepage     = "https://business.linkedin.com/marketing-solutions/native-advertising/linkedin-audience-network"

  spec.author       = "LinkedIn"
  spec.platform     = :ios, "11.0"
  spec.source       = { :path => '.' }
  spec.source_files = "LinkedinAudienceNetwork/MLFoundations/*.{h,m,swift}"
  spec.swift_version = '5.0'
  spec.subspec 'Core' do |sub|
    sub.source_files = 'LinkedinAudienceNetwork/Core/**/*.{h,m}'
  end
end

