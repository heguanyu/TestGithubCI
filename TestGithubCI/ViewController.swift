//
//  ViewController.swift
//  TestGithubCI
//
//  Created by Guanyu He on 11/8/21.
//

import UIKit
import TestXCFramework
import MLFoundations

class ViewController: UIViewController {

    override func viewDidLoad() {
        view = UIView()
        view.backgroundColor = .white
        let xcframework: TestLibWithXCFramework = TestLibWithXCFramework()
        title = TestLibWithXCFramework.someStaticFunction()
        print("static:" + TestLibWithXCFramework.someStaticFunction())
        print("nonStatic: " + xcframework.someNonStaticFunction())
        
    }
}

