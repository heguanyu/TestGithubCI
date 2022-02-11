//
//  InternalFunc0.swift
//  MLFoundations
//
//  Created by Adit Goel on 2/11/22.
//

import Foundation
import Core

public class InternalFunc0 {
    
    public init (){
        
    }
    
    public func multiply(A:Int32, B:Int32) -> Int32 {
        var a : Int32 = 0
        let corefunc = CoreFunc0()
        for _ in 1...B {
            a = corefunc.addfunc(A: A, B: a)
        }
        return a
    }
    
}
