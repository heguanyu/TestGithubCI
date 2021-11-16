//
//  TestGithubCITests.swift
//  TestGithubCITests
//
//  Created by Guanyu He on 11/8/21.
//

import XCTest
@testable import TestGithubCI

class TestGithubCITests: XCTestCase {

    private var mockInstance: TestStaticLib!

    override func setUpWithError() throws {
        mockInstance = TestStaticLib()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        XCTAssertEqual(TestStaticLib.someStaticFunction(), "Hello IOS CI world!")
        XCTAssertEqual(mockInstance.someNonStaticFunction(), "Hello bar!")
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
