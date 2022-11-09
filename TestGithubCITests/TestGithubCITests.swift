//
//  TestGithubCITests.swift
//  TestGithubCITests
//
//  Created by Guanyu He on 11/8/21.
//

import XCTest
import TestXCFramework
@testable import TestGithubCI

class TestGithubCITests: XCTestCase {

    private var mockInstance: TestLibWithXCFramework!

    override func setUpWithError() throws {
        mockInstance = TestLibWithXCFramework()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func disabled_testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        XCTAssertEqual(TestLibWithXCFramework.someStaticFunction(), "Hello IOS CI world!")
        XCTAssertEqual(mockInstance.someNonStaticFunction(), "Hello bar!")
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }
    
    func testOsVersion() throws {
        var systemVersion = UIDevice.current.systemVersion
        print(systemVersion)
        XCTAssertTrue(systemVersion.starts(with: "15"))
    }

}
