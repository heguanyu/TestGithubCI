//
//  TestLibWithXCFramework.swift
//  TestXCFramework
//
//  Created by Guanyu He on 11/18/21.
//

import MLFoundations
import CoreML
//import ZIPFoundation

public class TestLibWithXCFramework {
    public init() {
    }
    /**
      This is a static function that returns a string

      - Returns: A string
    */
    public static func someStaticFunction() -> String {
        do {
            
            let sdkBundle = Bundle(for: TestLibWithXCFramework.self)
            guard let mlmodelUrl = sdkBundle.url(forResource: "xgboost_test_mlmodel", withExtension: "") else {
                return "Unable to load mlmodel"
            }
            var mlmodelcUrl = try MLModel.compileModel(at: mlmodelUrl)
            mlmodelcUrl = mlmodelcUrl.appendingPathComponent("/")
            print(mlmodelcUrl)
            let fileManager = FileManager.default
            
            var resourceURL = mlmodelUrl
            resourceURL.deleteLastPathComponent()
            
            
            let destinationURL = resourceURL.appendingPathComponent("something.zip")
            print(destinationURL)
            
            try fileManager.removeItem(at: destinationURL)
//            try fileManager.zipItem(at: mlmodelcUrl, to: destinationURL)
            return destinationURL.absoluteString
        }
        catch {
            print(error)
            return error.localizedDescription
        }
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
