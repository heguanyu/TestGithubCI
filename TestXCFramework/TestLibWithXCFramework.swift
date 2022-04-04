//
//  TestLibWithXCFramework.swift
//  TestXCFramework
//
//  Created by Guanyu He on 11/18/21.
//

@_implementationOnly import MLFoundations

public class TestLibWithXCFramework {
    public init() {
    }
    /**
      This is a static function that returns a string

      - Returns: A string
    */
    public static func someStaticFunction() -> String {
        return "Hello IOS CI world!"
    }

    /**
      This is a function that returns a string

      - Returns: A string
    */
    public func someNonStaticFunction() -> String {
        return "Hello bar!"
    }

    /**
      This is a function that has parameters
      - Parameters:
          - input: Some input

      - Returns: A String same as input
    */
    public func someFunctionWithParam(input: String) -> String {
        MLFoundationsClass.init().multiply(A: 12, B: 32)
        return input
    }
}
