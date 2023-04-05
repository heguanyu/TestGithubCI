//
//  MLFoundations.swift
//  MLFoundations
//
//  Created by Guanyu He on 2/18/22.
//

import Foundation
import Core
import TensorFlowLite

public class MLFoundationsClass {

    public init (){
        let options = Interpreter.Options()
    }

    public func multiply(A:Int32, B:Int32) -> Int32 {
        var a : Int32 = 0
        let corefunc = CoreClass()
        for _ in 1...B {
            a = corefunc.addfunc(A: A, B: a)
        }
        return a
    }

}
