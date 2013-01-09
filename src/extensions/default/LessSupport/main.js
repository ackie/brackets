/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */

/*jslint vars: true, plusplus: true, nomen: true, regexp: true, maxerr: 50 */
/*global define, brackets, $, document */

define(function (require, exports, module) {
    "use strict";

    var Languages = brackets.getModule("language/Languages");
    
    // Minimal language definition: ID, human readable name, MIME Type
    var language = Languages.defineLanguage("less", "LESS", "text/x-less")
        .addFileExtension("less");
    
    // Fluent interface to add more information about the language
    language
        .addFileExtension("less")
        .setBlockComment("/*", "*/")
        .setLineComment("//");
    
    // Add the CodeMirror mode "more"
    brackets.libRequire(["thirdparty/CodeMirror2/mode/less/less"], function () {
        // Retrieve a language that has already been defined and add further information
        Languages.getLanguage("less").setMode("less");
    });
});
