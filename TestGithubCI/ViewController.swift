//
//  ViewController.swift
//  TestGithubCI
//
//  Created by Guanyu He on 11/8/21.
//

import UIKit
import TestXCFramework

class ViewController: UIViewController {

    override func viewDidLoad() {
        view = UIView()
        view.backgroundColor = .white
        let pub = PublicFunc0()
        let xcframework: TestLibWithXCFramework = TestLibWithXCFramework()
        let str = " = " + String(pub.publicfunc0())
        title = TestLibWithXCFramework.someStaticFunction() + str
        print("static:" + TestLibWithXCFramework.someStaticFunction())
        print("nonStatic: " + xcframework.someNonStaticFunction())
        
    }
}

