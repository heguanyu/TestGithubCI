//
//  TestStaticLib.swift
//  TestStaticLib
//
//  Created by Guanyu He on 11/10/21.
//

public class TestStaticLib {
    public init() {
    }
    public static func someStaticFunction() -> String {
        return "Hello IOS CI world!"
    }
    public func someNonStaticFunction() -> String {
        return "Hello bar!"
    }
}
