//
//  ViewController.swift
//  TestGithubCI
//
//  Created by Guanyu He on 11/8/21.
//

import UIKit
import TestStaticLib

class ViewController: UIViewController {

    override func viewDidLoad() {
        view = UIView()
        view.backgroundColor = .white

        let lib: TestStaticLib = TestStaticLib()
        title = TestStaticLib.someStaticFunction()
        print(TestStaticLib.someStaticFunction())
        print(lib.someNonStaticFunction())
    }
}

