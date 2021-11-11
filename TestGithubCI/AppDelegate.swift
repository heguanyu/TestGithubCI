//
//  AppDelegate.swift
//  TestGithubCI
//
//  Created by Guanyu He on 11/8/21.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {


    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        let viewControl = ViewController()
        let navigation = UINavigationController(rootViewController: viewControl)

        let frame = UIScreen.main.bounds
        window = UIWindow(frame: frame)

        window!.rootViewController = navigation
        window!.makeKeyAndVisible()

        return true
    }
}
