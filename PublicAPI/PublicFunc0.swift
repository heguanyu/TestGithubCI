//
//  PublicFunc0.swift
//  TestXCFramework
//
//  Created by Adit Goel on 2/11/22.
//

import Foundation
import MLFoundations

public class PublicFunc0 {
    
    public init(){
        
    }
    
    public func publicfunc0() -> Int32{
        
        return InternalFunc0().multiply(A: 10, B: 56)
        
    }
}
