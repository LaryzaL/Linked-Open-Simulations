import { loadInsightMaker } from "simulation";
import fs from "fs";

let model = loadInsightMaker(`<InsightMakerModel>
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />
    <Setting Note="" Version="37" TimeLength="40" TimeStart="8" TimeStep="0.25" TimeUnits="Hours" Units="" HiddenUIGroups="Validation,User Interface" SolutionAlgorithm="RK1" BackgroundColor="white" Throttle="-1" Macros="" SensitivityPrimitives="" SensitivityRuns="50" SensitivityBounds="50, 80, 95, 100" SensitivityShowRuns="false" unfolding="{&quot;text&quot;:&quot;Root Node&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;root&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Purpose of this model&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:0,\&quot;ids\&quot;:[\&quot;25\&quot;,\&quot;26\&quot;,\&quot;27\&quot;,\&quot;28\&quot;,\&quot;29\&quot;,\&quot;30\&quot;,\&quot;54\&quot;,\&quot;62\&quot;,\&quot;63\&quot;,\&quot;65\&quot;,\&quot;68\&quot;,\&quot;69\&quot;,\&quot;70\&quot;,\&quot;71\&quot;,\&quot;40\&quot;,\&quot;86\&quot;,\&quot;43\&quot;,\&quot;39\&quot;,\&quot;96\&quot;,\&quot;97\&quot;,\&quot;98\&quot;,\&quot;104\&quot;,\&quot;64\&quot;,\&quot;33\&quot;,\&quot;102\&quot;,\&quot;103\&quot;,\&quot;36\&quot;,\&quot;38\&quot;,\&quot;37\&quot;,\&quot;41\&quot;,\&quot;42\&quot;,\&quot;108\&quot;,\&quot;109\&quot;,\&quot;447\&quot;,\&quot;448\&quot;,\&quot;449\&quot;,\&quot;450\&quot;,\&quot;451\&quot;,\&quot;452\&quot;,\&quot;453\&quot;,\&quot;454\&quot;,\&quot;455\&quot;,\&quot;456\&quot;,\&quot;457\&quot;,\&quot;460\&quot;,\&quot;461\&quot;,\&quot;594\&quot;,\&quot;598\&quot;,\&quot;601\&quot;,\&quot;603\&quot;,\&quot;604\&quot;,\&quot;605\&quot;,\&quot;607\&quot;,\&quot;612\&quot;,\&quot;615\&quot;,\&quot;616\&quot;,\&quot;617\&quot;,\&quot;618\&quot;,\&quot;619\&quot;,\&quot;620\&quot;,\&quot;621\&quot;,\&quot;622\&quot;,\&quot;623\&quot;,\&quot;625\&quot;,\&quot;626\&quot;,\&quot;627\&quot;,\&quot;628\&quot;,\&quot;629\&quot;,\&quot;630\&quot;,\&quot;631\&quot;,\&quot;632\&quot;,\&quot;633\&quot;,\&quot;634\&quot;,\&quot;637\&quot;,\&quot;638\&quot;,\&quot;639\&quot;,\&quot;642\&quot;,\&quot;643\&quot;,\&quot;644\&quot;,\&quot;645\&quot;,\&quot;646\&quot;,\&quot;647\&quot;,\&quot;648\&quot;,\&quot;651\&quot;,\&quot;652\&quot;,\&quot;653\&quot;,\&quot;654\&quot;,\&quot;655\&quot;,\&quot;656\&quot;,\&quot;657\&quot;,\&quot;658\&quot;,\&quot;659\&quot;,\&quot;660\&quot;,\&quot;661\&quot;,\&quot;662\&quot;,\&quot;663\&quot;,\&quot;664\&quot;,\&quot;665\&quot;,\&quot;667\&quot;,\&quot;668\&quot;,\&quot;669\&quot;,\&quot;670\&quot;,\&quot;671\&quot;,\&quot;674\&quot;,\&quot;676\&quot;,\&quot;677\&quot;,\&quot;678\&quot;,\&quot;679\&quot;,\&quot;734\&quot;,\&quot;735\&quot;,\&quot;720\&quot;,\&quot;725\&quot;,\&quot;738\&quot;,\&quot;719\&quot;,\&quot;722\&quot;,\&quot;729\&quot;,\&quot;728\&quot;,\&quot;726\&quot;,\&quot;462\&quot;,\&quot;591\&quot;,\&quot;683\&quot;,\&quot;684\&quot;,\&quot;723\&quot;,\&quot;716\&quot;,\&quot;717\&quot;,\&quot;730\&quot;,\&quot;714\&quot;,\&quot;624\&quot;,\&quot;732\&quot;,\&quot;589\&quot;,\&quot;733\&quot;,\&quot;592\&quot;,\&quot;721\&quot;,\&quot;724\&quot;,\&quot;718\&quot;,\&quot;593\&quot;,\&quot;590\&quot;,\&quot;727\&quot;,\&quot;682\&quot;,\&quot;731\&quot;,\&quot;737\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;&lt;!--[if gte mso 9]&gt;&lt;xml&gt;\n &lt;w:WordDocument&gt;\n  &lt;w:View&gt;Normal&lt;/w:View&gt;\n  &lt;w:Zoom&gt;0&lt;/w:Zoom&gt;\n  &lt;w:TrackMoves/&gt;\n  &lt;w:TrackFormatting/&gt;\n  &lt;w:PunctuationKerning/&gt;\n  &lt;w:ValidateAgainstSchemas/&gt;\n  &lt;w:SaveIfXMLInvalid&gt;false&lt;/w:SaveIfXMLInvalid&gt;\n  &lt;w:IgnoreMixedContent&gt;false&lt;/w:IgnoreMixedContent&gt;\n  &lt;w:AlwaysShowPlaceholderText&gt;false&lt;/w:AlwaysShowPlaceholderText&gt;\n  &lt;w:DoNotPromoteQF/&gt;\n  &lt;w:LidThemeOther&gt;EN-AU&lt;/w:LidThemeOther&gt;\n  &lt;w:LidThemeAsian&gt;X-NONE&lt;/w:LidThemeAsian&gt;\n  &lt;w:LidThemeComplexScript&gt;X-NONE&lt;/w:LidThemeComplexScript&gt;\n  &lt;w:Compatibility&gt;\n   &lt;w:BreakWrappedTables/&gt;\n   &lt;w:SnapToGridInCell/&gt;\n   &lt;w:WrapTextWithPunct/&gt;\n   &lt;w:UseAsianBreakRules/&gt;\n   &lt;w:DontGrowAutofit/&gt;\n   &lt;w:SplitPgBreakAndParaMark/&gt;\n   &lt;w:EnableOpenTypeKerning/&gt;\n   &lt;w:DontFlipMirrorIndents/&gt;\n   &lt;w:OverrideTableStyleHps/&gt;\n  &lt;/w:Compatibility&gt;\n  &lt;w:BrowserLevel&gt;MicrosoftInternetExplorer4&lt;/w:BrowserLevel&gt;\n  &lt;m:mathPr&gt;\n   &lt;m:mathFont m:val=\&quot;Cambria Math\&quot;/&gt;\n   &lt;m:brkBin m:val=\&quot;before\&quot;/&gt;\n   &lt;m:brkBinSub m:val=\&quot;&amp;#45;-\&quot;/&gt;\n   &lt;m:smallFrac m:val=\&quot;off\&quot;/&gt;\n   &lt;m:dispDef/&gt;\n   &lt;m:lMargin m:val=\&quot;0\&quot;/&gt;\n   &lt;m:rMargin m:val=\&quot;0\&quot;/&gt;\n   &lt;m:defJc m:val=\&quot;centerGroup\&quot;/&gt;\n   &lt;m:wrapIndent m:val=\&quot;1440\&quot;/&gt;\n   &lt;m:intLim m:val=\&quot;subSup\&quot;/&gt;\n   &lt;m:naryLim m:val=\&quot;undOvr\&quot;/&gt;\n  &lt;/m:mathPr&gt;&lt;/w:WordDocument&gt;\n&lt;/xml&gt;&lt;![endif][if gte mso 9]&gt;&lt;xml&gt;\n &lt;w:LatentStyles DefLockedState=\&quot;false\&quot; DefUnhideWhenUsed=\&quot;true\&quot;\n  DefSemiHidden=\&quot;true\&quot; DefQFormat=\&quot;false\&quot; DefPriority=\&quot;99\&quot;\n  LatentStyleCount=\&quot;267\&quot;&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;0\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Normal\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 7\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 8\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 9\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 7\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 8\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 9\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;35\&quot; QFormat=\&quot;true\&quot; Name=\&quot;caption\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;10\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Title\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;1\&quot; Name=\&quot;Default Paragraph Font\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;11\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Subtitle\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;22\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Strong\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;20\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Emphasis\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;59\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Table Grid\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Placeholder Text\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;1\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;No Spacing\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Revision\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;34\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;List Paragraph\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;29\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Quote\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;30\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Intense Quote\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;19\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Subtle Emphasis\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;21\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Intense Emphasis\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;31\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Subtle Reference\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;32\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Intense Reference\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;33\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Book Title\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;37\&quot; Name=\&quot;Bibliography\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; QFormat=\&quot;true\&quot; Name=\&quot;TOC Heading\&quot;/&gt;\n &lt;/w:LatentStyles&gt;\n&lt;/xml&gt;&lt;![endif][if gte mso 10]&gt;\n&lt;style&gt;\n /* Style Definitions */\n table.MsoNormalTable\n\t{mso-style-name:\&quot;Table Normal\&quot;;\n\tmso-tstyle-rowband-size:0;\n\tmso-tstyle-colband-size:0;\n\tmso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-parent:\&quot;\&quot;;\n\tmso-padding-alt:0cm 5.4pt 0cm 5.4pt;\n\tmso-para-margin:0cm;\n\tmso-para-margin-bottom:.0001pt;\n\tmso-pagination:widow-orphan;\n\tfont-size:10.0pt;\n\tfont-family:\&quot;Times New Roman\&quot;,\&quot;serif\&quot;;}\n&lt;/style&gt;\n&lt;![endif]--&gt;&lt;span style=\&quot;font-size: 11pt; font-family: &amp;quot;Calibri&amp;quot;,&amp;quot;sans-serif&amp;quot;; color: rgb(31, 73, 125);\&quot;&gt;The &lt;b&gt;main purpose&lt;/b&gt; of &lt;b&gt;this &lt;/b&gt;model is to explore: &lt;i&gt;\&quot;&lt;/i&gt;&lt;/span&gt;&lt;b&gt;&lt;span style=\&quot;font-size:11.0pt;font-family:&amp;quot;Calibri&amp;quot;,&amp;quot;sans-serif&amp;quot;;\nmso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-bidi-font-family:\n&amp;quot;Times New Roman&amp;quot;;color:#1F497D;mso-ansi-language:EN-AU;mso-fareast-language:\nEN-AU;mso-bidi-language:AR-SA\&quot;&gt;&lt;i&gt;What would happen if we had two rather than one Emergency Physician on the Saturday day shift?\&quot;&lt;/i&gt; &lt;/span&gt;&lt;/b&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:0,\&quot;ids\&quot;:[\&quot;751\&quot;,\&quot;754\&quot;,\&quot;752\&quot;,\&quot;753\&quot;,\&quot;755\&quot;,\&quot;747\&quot;,\&quot;749\&quot;,\&quot;748\&quot;,\&quot;731\&quot;,\&quot;733\&quot;,\&quot;737\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Purpose of ED Care&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;&lt;i&gt;&lt;b&gt;Introduction:&lt;/b&gt;&lt;/i&gt;&lt;br&gt;The &lt;span style=\&quot;font-weight: bold;\&quot;&gt;PURPOSE &lt;/span&gt;of ED is to focus on ED care. &lt;br&gt;&lt;br&gt;The &lt;span style=\&quot;font-weight: bold;\&quot;&gt;JOB of ED&lt;/span&gt; is to treat undifferentiated patients across age and disease or injury spectra, to create a time-restricted assessment of the patient, to resuscitate and stabilize in order to establish initial or definitive treatment, and to discharge the patient to an appropriate facility in a safely manner.&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;28\&quot;,\&quot;29\&quot;,\&quot;30\&quot;,\&quot;33\&quot;,\&quot;68\&quot;,\&quot;64\&quot;,\&quot;25\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;Once &lt;span style=\&quot;font-weight: bold;\&quot;&gt;ED Care&lt;/span&gt; is &lt;span style=\&quot;font-weight: bold;\&quot;&gt;completed&lt;/span&gt;, patients are either &lt;span style=\&quot;font-weight: bold;\&quot;&gt;discharged &lt;/span&gt;or &lt;span style=\&quot;font-weight: bold;\&quot;&gt;admitted &lt;/span&gt;to hospital. &quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Representations&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;Discharged patients may re-present for one of the following reason:&lt;br&gt;1. Did not wait for treatment but the condition deteriorates;&lt;br&gt;2. Patient has an exacerbation/complication of the original condition;&lt;br&gt;3. Develops a new condition/new symptoms&lt;br&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;751\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Post ED Care&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;69\&quot;,\&quot;62\&quot;,\&quot;65\&quot;,\&quot;63\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;What happens when &lt;span style=\&quot;font-weight: bold;\&quot;&gt;time delays&lt;/span&gt; do occur?&lt;br&gt;&lt;br&gt;A number of things...&lt;br&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Four Hours&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;103\&quot;,\&quot;102\&quot;,\&quot;104\&quot;,\&quot;96\&quot;,\&quot;98\&quot;,\&quot;97\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;27\&quot;,\&quot;26\&quot;,\&quot;70\&quot;,\&quot;676\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:0,\&quot;ids\&quot;:[\&quot;737\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;&lt;br&gt;&lt;ol&gt;&lt;li&gt;&lt;b&gt;&lt;span style=\&quot;text-decoration: underline;\&quot;&gt;Detected&amp;nbsp; delays&lt;/span&gt;&lt;/b&gt; (after Four hours- indicated by the orange arrows) can be caused by ED staff not seeing the patient on time; this may result in the patient leaving without being seen; or&lt;/li&gt;&lt;li&gt;There can be &lt;b&gt;&lt;span style=\&quot;text-decoration: underline;\&quot;&gt;delays &lt;/span&gt;&lt;/b&gt;in placing the patient in the appropriate treatment area; or&lt;/li&gt;&lt;li&gt;Patients are &lt;b&gt;&lt;span style=\&quot;text-decoration: underline;\&quot;&gt;treated&lt;/span&gt; &lt;/b&gt;and &lt;b&gt;&lt;span style=\&quot;text-decoration: underline;\&quot;&gt;discharged late&lt;/span&gt; &lt;/b&gt;(that means after Four hours; these are represented by orange arrows)= \&quot;&lt;span style=\&quot;font-weight: bold; font-style: italic;\&quot;&gt;cl&lt;/span&gt;\&quot; means \&quot;&lt;span style=\&quot;font-style: italic;\&quot;&gt;Care late&lt;/span&gt;\&quot; and \&quot;&lt;span style=\&quot;font-weight: bold; font-style: italic;\&quot;&gt;dl&lt;/span&gt;\&quot; means \&quot;&lt;span style=\&quot;font-style: italic;\&quot;&gt;Disposition late&lt;/span&gt;\&quot;.&lt;/li&gt;&lt;li&gt;&lt;b&gt;&lt;span style=\&quot;text-decoration: underline;\&quot;&gt;Undetected delays &lt;/span&gt;&lt;/b&gt;(not\n included in this model) may occur when patients are delayed but treated\n and discharged within the NEAT target of Four hours (blue arrows); or&lt;/li&gt;&lt;/ol&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;What happens after admission?&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;What happens&lt;b&gt; after admission?&lt;/b&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;36\&quot;,\&quot;41\&quot;,\&quot;40\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;71\&quot;,\&quot;54\&quot;,\&quot;86\&quot;,\&quot;43\&quot;,\&quot;37\&quot;,\&quot;38\&quot;,\&quot;42\&quot;,\&quot;39\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot; &lt;span style=\&quot;font-weight: bold;\&quot;&gt;After admission, &lt;/span&gt;patients can be transferred to:&lt;span style=\&quot;font-weight: bold;\&quot;&gt;&lt;br&gt;&lt;br&gt;&lt;/span&gt;&lt;ol&gt;&lt;li&gt;An&lt;span style=\&quot;font-weight: bold;\&quot;&gt; Emergency Medical Unit (EMU) &lt;/span&gt;and discharged soon after; or&amp;nbsp;&lt;/li&gt;&lt;li&gt;Remain at&lt;span style=\&quot;font-weight: bold;\&quot;&gt; EMU for more than 24 hours &lt;/span&gt;and then &lt;span style=\&quot;font-style: italic;\&quot;&gt;discharged late&lt;/span&gt; or &lt;span style=\&quot;font-style: italic;\&quot;&gt;admitted late&lt;/span&gt; to an inpatient ward (orange arrows)&lt;span style=\&quot;font-weight: bold;\&quot;&gt;; &lt;/span&gt;or&lt;span style=\&quot;font-weight: bold;\&quot;&gt;&lt;br&gt;&lt;/span&gt;&lt;/li&gt;&lt;li&gt;Admitted to an&lt;span style=\&quot;font-weight: bold;\&quot;&gt; Inpatient ward &lt;/span&gt;and then discharged later on.&lt;/li&gt;&lt;/ol&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;What influences patient flow?&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;What does influence &lt;span style=\&quot;font-weight: bold;\&quot;&gt;patient flow&lt;/span&gt;?&lt;br&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Pre Triage&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot; &lt;span style=\&quot;font-weight: bold;\&quot;&gt;Patient flow&lt;/span&gt; can be influenced by multiple factors (indicated by the pink and green balloons) such as:&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;448\&quot;,\&quot;449\&quot;,\&quot;626\&quot;,\&quot;625\&quot;,\&quot;627\&quot;,\&quot;447\&quot;,\&quot;452\&quot;,\&quot;450\&quot;,\&quot;451\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;&lt;span style=\&quot;font-weight: bold;\&quot;&gt;PRE TRIAGE STAGE:&lt;/span&gt;&lt;br&gt;&lt;ol&gt;&lt;li&gt;&lt;b&gt;&lt;i&gt;Daily arrivals &lt;/i&gt;&lt;/b&gt;(this is assumed to be at a constant rate) and &lt;b&gt;&lt;i&gt;Hour of day&lt;/i&gt;&lt;/b&gt; (time of presentation). &lt;/li&gt;&lt;li&gt;&lt;b&gt;&lt;i&gt;Arrival fraction&lt;/i&gt;&lt;/b&gt; and &lt;b&gt;&lt;i&gt;ambulance fraction&lt;/i&gt;&lt;/b&gt; (Green) are calculated to present a continual flow of presentations to ED.&lt;br&gt;&lt;/li&gt;&lt;li&gt;These are associated with &lt;i&gt;&lt;b&gt;Time in pretriage&lt;/b&gt;&lt;/i&gt; and &lt;i&gt;&lt;b&gt;Time in preCare&lt;/b&gt;&lt;/i&gt; which decrease the &lt;b&gt;&lt;i&gt;Time left for care&lt;/i&gt;&lt;/b&gt;.&lt;br&gt;&lt;/li&gt;&lt;/ol&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;621\&quot;,\&quot;618\&quot;,\&quot;622\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;See in ED&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;461\&quot;,\&quot;460\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;&lt;i&gt;&lt;b&gt;Flow of patients seen in ED&lt;/b&gt;&lt;/i&gt;&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;i&gt;&lt;b&gt;ED Spaces&lt;/b&gt;&lt;/i&gt;; and &lt;i&gt;&lt;b&gt;Unoccupied ED spaces &lt;/b&gt;&lt;/i&gt;increase flow while &lt;i&gt;&lt;b&gt;ED wait time &lt;/b&gt;&lt;/i&gt;decreases the flow of patients seen in ED;&lt;/li&gt;&lt;li&gt;&lt;i&gt;&lt;b&gt;ED wait time&lt;/b&gt;&lt;/i&gt; also increases &lt;i&gt;&lt;b&gt;time in preCare&lt;/b&gt;&lt;/i&gt; and decreases&lt;i&gt;&lt;b&gt; time left for care&lt;/b&gt;&lt;/i&gt;.&lt;br&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;637\&quot;,\&quot;453\&quot;,\&quot;455\&quot;,\&quot;454\&quot;,\&quot;456\&quot;,\&quot;457\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Care to Disp&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;108\&quot;,\&quot;109\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;Others factors affecting the &lt;i&gt;&lt;b&gt;ED rate&lt;/b&gt;&lt;/i&gt; of patients being seen include:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;i&gt;&lt;b&gt;ED completion rate&lt;/b&gt;&lt;/i&gt;&lt;/li&gt;&lt;li&gt;Factors associated with &lt;i&gt;&lt;b&gt;Specialists providing care&lt;/b&gt;&lt;/i&gt;, and &lt;/li&gt;&lt;li&gt;Factors related to &lt;i&gt;&lt;b&gt;target time in ED.&lt;/b&gt;&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;623\&quot;,\&quot;619\&quot;,\&quot;628\&quot;,\&quot;629\&quot;,\&quot;620\&quot;,\&quot;617\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;615\&quot;,\&quot;616\&quot;,\&quot;604\&quot;,\&quot;594\&quot;,\&quot;612\&quot;,\&quot;603\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Delay area to ED care&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;Delays to&lt;span style=\&quot;font-weight: bold; font-style: italic;\&quot;&gt; ED Care 4+ &lt;/span&gt;have a number of unplanned effects such as:&lt;br&gt;&lt;ol&gt;&lt;li&gt;Reducing the number of &lt;span style=\&quot;font-weight: bold; font-style: italic;\&quot;&gt;Unoccupied ED spaces&lt;/span&gt;;&lt;/li&gt;&lt;li&gt;&lt;span style=\&quot;font-weight: bold; font-style: italic;\&quot;&gt;Time left for ED care&lt;/span&gt; is reduced;&lt;/li&gt;&lt;li&gt;Time in &lt;span style=\&quot;font-weight: bold; font-style: italic;\&quot;&gt;PreCare &lt;/span&gt;is increased;&lt;/li&gt;&lt;li&gt;The number of &lt;span style=\&quot;font-weight: bold; font-style: italic;\&quot;&gt;hours beyond target&lt;/span&gt; is not monitored nor controlled.&lt;br&gt;&lt;/li&gt;&lt;/ol&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;NEAT Target&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;645\&quot;,\&quot;643\&quot;,\&quot;644\&quot;,\&quot;646\&quot;,\&quot;647\&quot;,\&quot;642\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;&lt;ul&gt;&lt;li&gt;&lt;b&gt;NEAT &lt;/b&gt;targets by hour are calculated to monitor the performance of&lt;i&gt;&lt;b&gt; ED Care.&lt;/b&gt;&lt;b&gt; &lt;/b&gt;&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;&lt;b&gt;Care to Disposition &lt;/b&gt;&lt;/i&gt;(blue arrow) can be affected by &lt;i&gt;&lt;b&gt;Total ED Disp &lt;/b&gt;&lt;/i&gt;and &lt;i&gt;&lt;b&gt;NEAT Target by hour.&lt;/b&gt;&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;663\&quot;,\&quot;662\&quot;,\&quot;664\&quot;,\&quot;668\&quot;,\&quot;667\&quot;,\&quot;665\&quot;,\&quot;671\&quot;,\&quot;670\&quot;,\&quot;669\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;654\&quot;,\&quot;655\&quot;,\&quot;656\&quot;,\&quot;653\&quot;,\&quot;651\&quot;,\&quot;652\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;677\&quot;,\&quot;683\&quot;,\&quot;684\&quot;,\&quot;682\&quot;,\&quot;674\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;678\&quot;,\&quot;735\&quot;,\&quot;732\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Post ED Care&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;648\&quot;,\&quot;598\&quot;,\&quot;605\&quot;,\&quot;607\&quot;,\&quot;601\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;&lt;b&gt;Post ED Care&lt;/b&gt;:&lt;br&gt;&lt;br&gt;This is an important component of the ED Care process, although it happens beyond the domain of EDs. This include delays in &lt;i&gt;&lt;b&gt;EMU 1+&lt;/b&gt;&lt;/i&gt; and &lt;i&gt;&lt;b&gt;Impatient Wards&lt;/b&gt;&lt;/i&gt;. They affect:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Bed capacity, which reduces the flow from &lt;i&gt;&lt;b&gt;ED &lt;/b&gt;&lt;/i&gt;to &lt;i&gt;&lt;b&gt;IPW&lt;/b&gt;&lt;/i&gt;;&lt;/li&gt;&lt;li&gt;Occupancy ratios and NEAT targets are also affected by the number of&lt;i&gt;&lt;b&gt; Base specialist per hour&lt;/b&gt;&lt;/i&gt;&lt;br&gt;&lt;/li&gt;&lt;/ul&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;728\&quot;,\&quot;729\&quot;,\&quot;727\&quot;,\&quot;734\&quot;,\&quot;733\&quot;,\&quot;731\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;679\&quot;,\&quot;661\&quot;,\&quot;657\&quot;,\&quot;660\&quot;,\&quot;659\&quot;,\&quot;658\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;716\&quot;,\&quot;717\&quot;,\&quot;714\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;719\&quot;,\&quot;718\&quot;,\&quot;720\&quot;,\&quot;730\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;722\&quot;,\&quot;723\&quot;,\&quot;737\&quot;,\&quot;738\&quot;,\&quot;721\&quot;,\&quot;725\&quot;,\&quot;724\&quot;,\&quot;719\&quot;,\&quot;726\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Visibility Change&quot;,&quot;data&quot;:&quot;{\&quot;opacity\&quot;:100,\&quot;ids\&quot;:[\&quot;592\&quot;,\&quot;462\&quot;,\&quot;593\&quot;,\&quot;589\&quot;,\&quot;590\&quot;,\&quot;591\&quot;,\&quot;632\&quot;,\&quot;630\&quot;,\&quot;633\&quot;,\&quot;634\&quot;,\&quot;631\&quot;,\&quot;740\&quot;,\&quot;624\&quot;]}&quot;,&quot;type&quot;:&quot;visibility&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Specialist case scenarios&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;The next step is to explore what would happen after admission i&lt;span style=\&quot;font-weight: bold;\&quot;&gt;n two different scenarios&lt;/span&gt; on Saturday day shift:&lt;br&gt;&lt;br&gt;1. With &lt;span style=\&quot;font-weight: bold;\&quot;&gt;One &lt;/span&gt;EM Physician; or &lt;br&gt;&lt;br&gt;2. &lt;span style=\&quot;font-weight: bold;\&quot;&gt;Two &lt;/span&gt;EM physicians.&lt;br&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]},{&quot;text&quot;:&quot;Potential additions&quot;,&quot;data&quot;:&quot;&quot;,&quot;type&quot;:&quot;group&quot;,&quot;leaf&quot;:false,&quot;expanded&quot;:true,&quot;children&quot;:[{&quot;text&quot;:&quot;Toggle Folders&quot;,&quot;data&quot;:&quot;{\&quot;mode\&quot;:\&quot;expand\&quot;,\&quot;ids\&quot;:[\&quot;624\&quot;]}&quot;,&quot;type&quot;:&quot;folder&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]},{&quot;text&quot;:&quot;Show Message&quot;,&quot;data&quot;:&quot;&lt;!--[if gte mso 9]&gt;&lt;xml&gt;\n &lt;w:WordDocument&gt;\n  &lt;w:View&gt;Normal&lt;/w:View&gt;\n  &lt;w:Zoom&gt;0&lt;/w:Zoom&gt;\n  &lt;w:TrackMoves/&gt;\n  &lt;w:TrackFormatting/&gt;\n  &lt;w:PunctuationKerning/&gt;\n  &lt;w:ValidateAgainstSchemas/&gt;\n  &lt;w:SaveIfXMLInvalid&gt;false&lt;/w:SaveIfXMLInvalid&gt;\n  &lt;w:IgnoreMixedContent&gt;false&lt;/w:IgnoreMixedContent&gt;\n  &lt;w:AlwaysShowPlaceholderText&gt;false&lt;/w:AlwaysShowPlaceholderText&gt;\n  &lt;w:DoNotPromoteQF/&gt;\n  &lt;w:LidThemeOther&gt;EN-AU&lt;/w:LidThemeOther&gt;\n  &lt;w:LidThemeAsian&gt;X-NONE&lt;/w:LidThemeAsian&gt;\n  &lt;w:LidThemeComplexScript&gt;X-NONE&lt;/w:LidThemeComplexScript&gt;\n  &lt;w:Compatibility&gt;\n   &lt;w:BreakWrappedTables/&gt;\n   &lt;w:SnapToGridInCell/&gt;\n   &lt;w:WrapTextWithPunct/&gt;\n   &lt;w:UseAsianBreakRules/&gt;\n   &lt;w:DontGrowAutofit/&gt;\n   &lt;w:SplitPgBreakAndParaMark/&gt;\n   &lt;w:EnableOpenTypeKerning/&gt;\n   &lt;w:DontFlipMirrorIndents/&gt;\n   &lt;w:OverrideTableStyleHps/&gt;\n  &lt;/w:Compatibility&gt;\n  &lt;w:BrowserLevel&gt;MicrosoftInternetExplorer4&lt;/w:BrowserLevel&gt;\n  &lt;m:mathPr&gt;\n   &lt;m:mathFont m:val=\&quot;Cambria Math\&quot;/&gt;\n   &lt;m:brkBin m:val=\&quot;before\&quot;/&gt;\n   &lt;m:brkBinSub m:val=\&quot;&amp;#45;-\&quot;/&gt;\n   &lt;m:smallFrac m:val=\&quot;off\&quot;/&gt;\n   &lt;m:dispDef/&gt;\n   &lt;m:lMargin m:val=\&quot;0\&quot;/&gt;\n   &lt;m:rMargin m:val=\&quot;0\&quot;/&gt;\n   &lt;m:defJc m:val=\&quot;centerGroup\&quot;/&gt;\n   &lt;m:wrapIndent m:val=\&quot;1440\&quot;/&gt;\n   &lt;m:intLim m:val=\&quot;subSup\&quot;/&gt;\n   &lt;m:naryLim m:val=\&quot;undOvr\&quot;/&gt;\n  &lt;/m:mathPr&gt;&lt;/w:WordDocument&gt;\n&lt;/xml&gt;&lt;![endif][if gte mso 9]&gt;&lt;xml&gt;\n &lt;w:LatentStyles DefLockedState=\&quot;false\&quot; DefUnhideWhenUsed=\&quot;true\&quot;\n  DefSemiHidden=\&quot;true\&quot; DefQFormat=\&quot;false\&quot; DefPriority=\&quot;99\&quot;\n  LatentStyleCount=\&quot;267\&quot;&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;0\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Normal\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 7\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 8\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;9\&quot; QFormat=\&quot;true\&quot; Name=\&quot;heading 9\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 7\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 8\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; Name=\&quot;toc 9\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;35\&quot; QFormat=\&quot;true\&quot; Name=\&quot;caption\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;10\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Title\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;1\&quot; Name=\&quot;Default Paragraph Font\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;11\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Subtitle\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;22\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Strong\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;20\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Emphasis\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;59\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Table Grid\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Placeholder Text\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;1\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;No Spacing\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Revision\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;34\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;List Paragraph\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;29\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Quote\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;30\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Intense Quote\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 1\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 2\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 3\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 4\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 5\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;60\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Shading Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;61\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light List Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;62\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Light Grid Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;63\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 1 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;64\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Shading 2 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;65\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 1 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;66\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium List 2 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;67\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 1 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;68\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 2 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;69\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Medium Grid 3 Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;70\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Dark List Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;71\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Shading Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;72\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful List Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;73\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; Name=\&quot;Colorful Grid Accent 6\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;19\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Subtle Emphasis\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;21\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Intense Emphasis\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;31\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Subtle Reference\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;32\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Intense Reference\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;33\&quot; SemiHidden=\&quot;false\&quot;\n   UnhideWhenUsed=\&quot;false\&quot; QFormat=\&quot;true\&quot; Name=\&quot;Book Title\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;37\&quot; Name=\&quot;Bibliography\&quot;/&gt;\n  &lt;w:LsdException Locked=\&quot;false\&quot; Priority=\&quot;39\&quot; QFormat=\&quot;true\&quot; Name=\&quot;TOC Heading\&quot;/&gt;\n &lt;/w:LatentStyles&gt;\n&lt;/xml&gt;&lt;![endif][if gte mso 10]&gt;\n&lt;style&gt;\n /* Style Definitions */\n table.MsoNormalTable\n\t{mso-style-name:\&quot;Table Normal\&quot;;\n\tmso-tstyle-rowband-size:0;\n\tmso-tstyle-colband-size:0;\n\tmso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-parent:\&quot;\&quot;;\n\tmso-padding-alt:0cm 5.4pt 0cm 5.4pt;\n\tmso-para-margin:0cm;\n\tmso-para-margin-bottom:.0001pt;\n\tmso-pagination:widow-orphan;\n\tfont-size:10.0pt;\n\tfont-family:\&quot;Times New Roman\&quot;,\&quot;serif\&quot;;}\n&lt;/style&gt;\n&lt;![endif]--&gt;&lt;span style=\&quot;font-size: 11pt; font-family: &amp;quot;Calibri&amp;quot;,&amp;quot;sans-serif&amp;quot;; color: rgb(31, 73, 125);\&quot;&gt;Finally, &lt;/span&gt;&lt;span style=\&quot;font-size: 11pt; font-family: &amp;quot;Calibri&amp;quot;,&amp;quot;sans-serif&amp;quot;; color: rgb(31, 73, 125);\&quot;&gt;&lt;br&gt;&lt;/span&gt;&lt;ul&gt;&lt;li&gt;&lt;span style=\&quot;font-size: 11pt; font-family: &amp;quot;Calibri&amp;quot;,&amp;quot;sans-serif&amp;quot;; color: rgb(31, 73, 125);\&quot;&gt;The next step is to add the two areas with two\nqueues and two sources (amb and WI).&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span style=\&quot;font-size:11.0pt;font-family:&amp;quot;Calibri&amp;quot;,&amp;quot;sans-serif&amp;quot;;\nmso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-bidi-font-family:\n&amp;quot;Times New Roman&amp;quot;;color:#1F497D;mso-ansi-language:EN-AU;mso-fareast-language:\nEN-AU;mso-bidi-language:AR-SA\&quot;&gt;The problem is how to allocate\npatients and resources to the two queues and areas and get data to calibrate it..&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&quot;,&quot;type&quot;:&quot;note&quot;,&quot;leaf&quot;:true,&quot;expanded&quot;:false,&quot;children&quot;:[]}]}]}" unfoldingStatus="on" unfoldingAuto="non-editors" oldId="undefined" StyleSheet="{}" id="2">
      <mxCell parent="1" vertex="1" visible="0">
        <mxGeometry x="20" y="20" width="80" height="40" as="geometry" />
      </mxCell>
    </Setting>
    <Display name="Patients in ED" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" ThreeDimensional="false" Primitives="26,29,33,102,682" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" yAxis2="" Primitives2="" showMarkers="false" showLines="false" showArea="true" legendPosition="Automatic" oldId="undefined" id="3">
      <mxCell style="roundImage;image=/builder/images/DisplayFull.png;" parent="1" vertex="1" visible="0">
        <mxGeometry x="50" y="20" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Text name="ED Flows without separate areas" LabelPosition="Middle" oldId="undefined" id="25">
      <mxCell style="text;fontStyle=0" parent="1" vertex="1">
        <mxGeometry x="20" y="563.75" width="550" height="50" as="geometry" />
      </mxCell>
    </Text>
    <Stock name="Pre Triage" Note="" InitialValue="1" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="26">
      <mxCell style="stock;strokeColor=#FFFF00;fontColor=#800000" parent="1" vertex="1">
        <mxGeometry x="100" y="178.75" width="80" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="arrive" Note="" FlowRate="[Daily arrivals]*[Arrival fraction]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="27">
      <mxCell style="flow;startFill=0" parent="1" target="26" edge="1">
        <mxGeometry x="-60" y="-53.74999999999999" width="100" height="100" as="geometry">
          <mxPoint x="20" y="196.25" as="sourcePoint" />
          <mxPoint x="-60" y="46.25000000000001" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="triage and register" Note="quick less than 5 minutes" FlowRate="12" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="28">
      <mxCell style="flow" parent="1" source="26" target="29" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="320" y="286.25" as="targetPoint" />
          <Array as="points">
            <mxPoint x="210" y="230" />
          </Array>
          <mxPoint x="20" y="-16.25" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="Delay for Area  or EDMO" Note="lying or sitting in an ambulance bay, waiting room, or in a ED area waiting to be seen by an EDMO" InitialValue="1" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="29">
      <mxCell style="stock;strokeColor=#FF6600;fontColor=#800000" parent="1" vertex="1">
        <mxGeometry x="240" y="243.75" width="80" height="60" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="see in ED" Note="" FlowRate="IfThenElse([Unoccupied ED spaces]&gt;0,  [Delay for Area  or EDMO]/[ED wait time], 0)" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="30">
      <mxCell style="flow" parent="1" source="29" target="33" edge="1">
        <mxGeometry x="-80" y="-46.24999999999999" width="100" height="100" as="geometry">
          <mxPoint x="-80" y="53.75000000000001" as="sourcePoint" />
          <mxPoint x="470" y="273.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="Inpatient ward" Note="" InitialValue="180" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="54">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="910" y="417.5" width="80" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Stock name="Recent ED Discharge" Note="" InitialValue="0" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="62">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="650" y="100" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Stock name="ED Admit" Note="" InitialValue="0" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="63">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="680" y="417.5" width="75" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="admit" Note="" FlowRate="[ED Disposition]*[admit fraction]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="65">
      <mxCell style="flow" parent="1" source="68" target="63" edge="1">
        <mxGeometry x="-390" y="7.105427357601002e-15" width="100" height="100" as="geometry">
          <mxPoint x="-390" y="100" as="sourcePoint" />
          <mxPoint x="-290" y="7.105427357601002e-15" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="ED Disposition" Note="" InitialValue="1" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="68">
      <mxCell style="stock;strokeColor=#008000" parent="1" vertex="1">
        <mxGeometry x="607.5" y="253.75" width="75" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="discharge" Note="" FlowRate="[ED Disposition]*(1-[admit fraction])" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="69">
      <mxCell style="flow" parent="1" source="68" target="62" edge="1">
        <mxGeometry x="-390" y="7.105427357601002e-15" width="100" height="100" as="geometry">
          <mxPoint x="-390" y="100" as="sourcePoint" />
          <mxPoint x="-290" y="7.105427357601002e-15" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="failure to see" Note="includes DidNotWait, Transfers and Treatment INcomplete (Left Against Medical Advice usually while waiting for IP Review)" FlowRate="14/40" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="70">
      <mxCell style="flow;strokeColor=#FF6600" parent="1" source="29" edge="1">
        <mxGeometry x="-80" y="-46.24999999999999" width="100" height="100" as="geometry">
          <mxPoint x="-80" y="53.75000000000001" as="sourcePoint" />
          <mxPoint x="250" y="496.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="ED to IPW" Note="added ward occupancy from 7981" FlowRate="IfThenElse([Admitted in ED spaces]=1,IfThenElse([Occupancy Level]&lt;0, [ED Admit], 0),0)" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="71">
      <mxCell style="flow" parent="1" source="63" target="54" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint x="-385" y="171.25" as="sourcePoint" />
          <mxPoint x="-285" y="71.25" as="targetPoint" />
          <Array as="points">
            <mxPoint x="840" y="437.5" />
          </Array>
          <mxPoint x="-12.5" y="-1.75" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="to EMU" Note="" FlowRate="IfThenElse([Admitted in ED spaces]=1,IfThenElse([Unoccupied EMU beds]&gt;0,  0.5, 0),0)\n" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="40">
      <mxCell style="flow" parent="1" source="63" target="36" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint x="632.5" y="625" as="sourcePoint" />
          <mxPoint x="262.5" y="45.00000000000001" as="targetPoint" />
          <Array as="points">
            <mxPoint x="747.5" y="450" />
          </Array>
          <mxPoint x="-18" y="-5.625" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="ward net discharge" Note="need by day and time including % before 1200 and discharges vs admits to captur readmits within 28 days" FlowRate="1.5" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="86">
      <mxCell style="flow;startFill=0" parent="1" source="54" edge="1">
        <mxGeometry x="-355" y="-37.49999999999999" width="100" height="100" as="geometry">
          <mxPoint x="-355" y="62.50000000000001" as="sourcePoint" />
          <mxPoint x="950" y="326.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="EMU to wards" Note="" FlowRate="0.025" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="43">
      <mxCell style="flow" parent="1" source="36" target="54" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint x="210" y="40.00000000000001" as="sourcePoint" />
          <mxPoint x="1010" y="550" as="targetPoint" />
          <Array as="points">
            <mxPoint x="930" y="446.25" />
          </Array>
          <mxPoint x="67.5" y="4.375" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="EMU to wards late" Note="" FlowRate="0.0125" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="39">
      <mxCell style="flow;strokeColor=#FF6600" parent="1" source="38" target="54" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint x="205" y="40.00000000000001" as="sourcePoint" />
          <mxPoint x="1025" y="620" as="targetPoint" />
          <Array as="points">
            <mxPoint x="985" y="466.25" />
          </Array>
          <mxPoint x="35" y="48.125" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="ED Disp Late" Note="" InitialValue="0" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="96">
      <mxCell style="stock;strokeColor=#800080;fontColor=#800000" parent="1" vertex="1">
        <mxGeometry x="692.5" y="303.75" width="75" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="d late" Note="" FlowRate="[ED Disp Late]*(1-[admit fraction for late])" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="97">
      <mxCell style="flow;strokeColor=#FF6600" parent="1" source="96" target="62" edge="1">
        <mxGeometry x="-175" y="-44.99999999999999" width="100" height="100" as="geometry">
          <mxPoint x="-175" y="55.00000000000001" as="sourcePoint" />
          <mxPoint x="-75" y="-44.99999999999999" as="targetPoint" />
          <Array as="points">
            <mxPoint x="745" y="195" />
          </Array>
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="a late" Note="" FlowRate="[ED Disp Late]*[admit fraction for late]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="98">
      <mxCell style="flow;strokeColor=#FF6600" parent="1" source="96" target="63" edge="1">
        <mxGeometry x="-175" y="-44.99999999999999" width="100" height="100" as="geometry">
          <mxPoint x="-175" y="55.00000000000001" as="sourcePoint" />
          <mxPoint x="-75" y="-44.99999999999999" as="targetPoint" />
          <Array as="points">
            <mxPoint x="735" y="315" />
          </Array>
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="cl to dl" Note="" FlowRate="[ED Care 4+]/[hours beyond target]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="104">
      <mxCell style="flow;strokeColor=#FF6600" parent="1" source="102" target="96" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint x="-65" y="174.6875" as="sourcePoint" />
          <mxPoint x="35" y="74.6875" as="targetPoint" />
          <Array as="points">
            <mxPoint x="717.5" y="319.6875" />
          </Array>
          <mxPoint x="-10" y="-9.25" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="care to disp" Note="" FlowRate="Min([ED Care],[ED completion rate])" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="64">
      <mxCell style="flow" parent="1" source="33" target="68" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint x="-152.5" y="186.25" as="sourcePoint" />
          <mxPoint x="-52.5" y="86.25" as="targetPoint" />
          <Array as="points">
            <mxPoint x="450" y="275" />
          </Array>
          <mxPoint x="6.25" y="8.25" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="ED Care" Note="can be split into special areas like paeds subacute psych and procedure rooms" InitialValue="15" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="33">
      <mxCell style="stock;strokeColor=#0000FF" parent="1" vertex="1">
        <mxGeometry x="425" y="261.25" width="55" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Stock name="ED Care 4+" Note="can be split into special areas like paeds subacute psych and procedure rooms" InitialValue="2" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="102">
      <mxCell style="stock;strokeColor=#FF0000;fontColor=#800000" parent="1" vertex="1">
        <mxGeometry x="552.5" y="315" width="55" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="4hr" Note="add 2 and 3 hour as well esp during midshift eg 8-1400 and 1600 to 2000" FlowRate="[ED Care]/[time left for care]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="103">
      <mxCell style="flow;strokeColor=#FF6600" parent="1" source="33" target="102" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint x="517.5" y="282.5" as="sourcePoint" />
          <mxPoint x="617.5" y="182.5" as="targetPoint" />
          <Array as="points">
            <mxPoint x="460" y="296.25" />
          </Array>
          <mxPoint x="-26.25" y="18.125" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="EMU" Note="" InitialValue="5" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="36">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="705" y="506.25" width="70" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Stock name="EMU 1+" Note="" InitialValue="1" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="38">
      <mxCell style="stock;strokeColor=#FF6600;fontColor=#800000" parent="1" vertex="1">
        <mxGeometry x="835" y="538.75" width="70" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="24hrs" Note="" FlowRate="0.025" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="37">
      <mxCell style="flow;strokeColor=#FF6600" parent="1" source="36" target="38" edge="1">
        <mxGeometry x="230" y="-206.25" width="100" height="100" as="geometry">
          <mxPoint x="230" y="-106.25" as="sourcePoint" />
          <mxPoint x="850" y="473.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="EMU discharge " Note="90%" FlowRate="0.45" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="41">
      <mxCell style="flow" parent="1" source="36" edge="1">
        <mxGeometry x="240" y="-153.75" width="100" height="100" as="geometry">
          <mxPoint x="240" y="-53.74999999999999" as="sourcePoint" />
          <mxPoint x="730" y="616.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="EMU discharge late" Note="" FlowRate="0.0125" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="42">
      <mxCell style="flow;strokeColor=#FF6600" parent="1" source="38" edge="1">
        <mxGeometry x="215" y="-153.75" width="100" height="100" as="geometry">
          <mxPoint x="215" y="-53.74999999999999" as="sourcePoint" />
          <mxPoint x="870" y="636.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Variable name="ED completion rate" Note="" Equation="[base completion rate]+[specialists per hour]*[specialist effect on care]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="108">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="500" y="151.25" width="80" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="109">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="108" target="64" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Converter name="Arrival fraction" Note="Average number of arrivals per hour" Source="448" Data="0,0.031; 1,0.029; 2,0.026; 3,0.023; 4,0.02; 5,0.018; 6,0.018; 7,0.026; 8,0.037; 9,0.051; 10,0.059; 11,0.062; 12,0.061; 13,0.059; 14,0.057; 15,0.056; 16,0.054; 17,0.05; 18,0.051; 19,0.045; 20,0.047; 21,0.043; 22,0.041; 23,0.036; 24,0.031" Interpolation="Linear" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="447">
      <mxCell style="converter" parent="1" vertex="1">
        <mxGeometry x="10" y="86.25" width="65" height="40" as="geometry" />
      </mxCell>
    </Converter>
    <Variable name="Hour of day" Note="" Equation="Hours() mod 24" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="448">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="50" y="30" width="70" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="449">
      <mxCell style="link" parent="1" source="448" target="447" edge="1">
        <mxGeometry x="-150" y="-603.75" width="100" height="100" as="geometry">
          <mxPoint x="-150" y="-503.75" as="sourcePoint" />
          <mxPoint x="-50" y="-603.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="450">
      <mxCell style="link" parent="1" source="447" target="27" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Daily arrivals" Note="Total per day" Equation="175" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="451">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="10" y="265" width="70" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="452">
      <mxCell style="link" parent="1" source="451" target="27" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="ED Spaces" Note="the maximum is flexible when overcrowded and includes resusc for now" Equation="22" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="453">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="260" y="120" width="70" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Unoccupied ED spaces" Note="" Equation="[ED Spaces]-[ED Care]-[ED Care 4+]-[Admitted in ED]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="454">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="325" y="196.25" width="100" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="455">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="453" target="454" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="456">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="33" target="454" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="457">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="454" target="30" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="ED wait time" Note="" Equation="0.8" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="460">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="342.5" y="318.75" width="57.5" height="47.5" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="461">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="460" target="30" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="360" y="246.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="specialist effect on care" Note="one non spec plus 1 or 2 spec teams each of which adds 2.5 completions per hour" Equation="2.5" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="true" SliderMax="3" SliderMin="0.1" SliderStep="0.1" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="594">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="487.5" y="77.5" width="80" height="53.75" as="geometry" />
      </mxCell>
    </Variable>
    <Converter name="base Specialists per hour" Note="" Source="448" Data="0,0; 7,0; 7.5,1; 8,2; 15.5,2; 16,2; 23,2; 23.5,1; 24,0" Interpolation="Linear" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="598">
      <mxCell style="converter" parent="1" vertex="1">
        <mxGeometry x="295" y="70" width="90" height="45" as="geometry" />
      </mxCell>
    </Converter>
    <Variable name="Specialists per SatWE Day Shift" Note="" Equation="1" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="true" SliderMax="2" SliderMin="1" SliderStep="1" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="601">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="387.5" y="41.25" width="120" height="45" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="603">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="612" target="108" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="604">
      <mxCell style="link;fontColor=#800000;strokeColor=#0000FF" parent="1" source="594" target="108" edge="1">
        <mxGeometry x="0.05018728220545654" y="56.972281720860344" width="100" height="100" as="geometry">
          <mxPoint x="0.05018728220545654" y="156.97228172086034" as="sourcePoint" />
          <mxPoint x="100.05018728220546" y="56.972281720860344" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="605">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="598" target="612" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="607">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="601" target="612" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="specialists per hour" Note="flexibility in allocating time and resources between Acute and Fast Track so look at overall ED effect rather than ED area effect by resources" Equation="IfThenElse(Time()&gt;{7.9 hours} and Time()&lt;{15.9 hours}, [Specialists per SatWE Day Shift],[base Specialists per hour])" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="612">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="412.5" y="115" width="80" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="base completion rate" Note="based on overnight shift performance of one non specialist team around 3 per hour completions" Equation="3" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="615">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="557.5" y="54.37500000000001" width="92.5" height="45" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="616">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="615" target="108" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Target time in ED" Note="" Equation="4" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="617">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="487.5" y="426.25" width="80" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="time in pretriage" Note="" Equation="5/60" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="618">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="285" y="418.75" width="80" height="43.75" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="time left for care" Note="" Equation="[Target time in ED]-[time in preCare]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="619">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="447.5" y="361.25" width="60" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="620">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="617" target="619" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="621">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="460" target="628" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="622">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="618" target="628" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="623">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="619" target="103" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="492.5" y="392.5" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Converter name="Ambulance fraction" Note="ambulance matrix load balancing P1 7 per hour (NSW 2012 data Mohsin)" Source="448" Data="0,0.341; 1,0.37; 2,0.376; 3,0.376; 4,0.37; 5,0.356; 6,0.301; 7,0.204; 8,0.186; 9,0.189; 10,0.205; 11,0.221; 12,0.238; 13,0.237; 14,0.234; 15,0.235; 16,0.226; 17,0.218; 18,0.225; 19,0.21; 20,0.234; 21,0.252; 22,0.283; 23,0.312; 24,0.341" Interpolation="Linear" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="625">
      <mxCell style="converter" parent="1" vertex="1">
        <mxGeometry x="60" y="131.25" width="70" height="40" as="geometry" />
      </mxCell>
    </Converter>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="626">
      <mxCell style="link" parent="1" source="448" target="625" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="627">
      <mxCell style="link" parent="1" source="625" target="27" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="time in preCare" Note="" Equation="[ED wait time]+[time in pretriage]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="628">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="390" y="426.25" width="70" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="629">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="628" target="619" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Display name="Completions" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" yAxis2="" showMarkers="false" showLines="true" showArea="false" ThreeDimensional="false" Primitives="612" Primitives2="108,615" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" legendPosition="Automatic" oldId="undefined" id="636">
      <mxCell style="display" parent="1" vertex="1" visible="0">
        <mxGeometry x="10" y="10" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="637">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="102" target="454" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="hours beyond target" Note="try 1" Equation="1.2" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="true" SliderMax="10" SliderMin="0.1" SliderStep="0.1" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="638">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="552.5" y="376.25" width="70" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="639">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="638" target="104" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Display name="Cumulative Disposition" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" yAxis2="" showMarkers="false" showLines="true" showArea="false" ThreeDimensional="false" Primitives="665,662" Primitives2="" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" legendPosition="Automatic" oldId="undefined" id="640">
      <mxCell style="display" parent="1" vertex="1" visible="0">
        <mxGeometry x="10" y="10" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Variable name="NEAT Perf by hour" Note="" Equation="100*[care to disp]/[Total ED Disp]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="642">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="835" y="223.75" width="75" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="643">
      <mxCell style="link" parent="1" source="64" target="645" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="644">
      <mxCell style="link" parent="1" source="104" target="645" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Total ED Disp" Note="" Equation="[care to disp]+[cl to dl]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="645">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="765" y="160" width="60" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="646">
      <mxCell style="link" parent="1" source="64" target="642" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="647">
      <mxCell style="link" parent="1" source="645" target="642" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="648">
      <mxCell style="link" parent="1" source="448" target="598" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Display name="Flows" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" yAxis2="" showMarkers="false" showLines="true" showArea="false" ThreeDimensional="false" Primitives="103,27,104,64" Primitives2="" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" legendPosition="Automatic" oldId="undefined" id="649">
      <mxCell style="display" parent="1" vertex="1" visible="0">
        <mxGeometry x="10" y="10" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Display name="NEAT Performance" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" yAxis2="" showMarkers="false" showLines="true" showArea="false" ThreeDimensional="false" Primitives="642,669,743,744" Primitives2="612" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" legendPosition="Automatic" oldId="undefined" id="641">
      <mxCell style="display" parent="1" vertex="1" visible="0">
        <mxGeometry x="10" y="10" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Display name="Admit and EMU" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" yAxis2="" showMarkers="false" showLines="true" showArea="false" ThreeDimensional="false" Primitives="38,36,63" Primitives2="54" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" legendPosition="Automatic" oldId="undefined" id="650">
      <mxCell style="display" parent="1" vertex="1" visible="0">
        <mxGeometry x="10" y="10" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Variable name="admit fraction for late" Note="" Equation="0.64" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="651">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="780" y="290" width="70" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="652">
      <mxCell style="link" parent="1" source="651" target="98" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="653">
      <mxCell style="link" parent="1" source="651" target="97" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="admit fraction" Note="" Equation="0.16" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="654">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="570" y="196.25" width="60" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="655">
      <mxCell style="link" parent="1" source="654" target="69" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="656">
      <mxCell style="link" parent="1" source="654" target="65" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="occupancy level" Note="" Equation="[Inpatient ward]-[Bed Capacity]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="657">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="810" y="356.25" width="80" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="658">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="54" target="657" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Bed Capacity" Note="total IP Ward Beds vs available for ED excludes EMU" Equation="200" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="659">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="955" y="255" width="70" height="38.75" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="660">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="659" target="657" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="661">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="657" target="71" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Stock name="Cum ED Disp" Note="" InitialValue="0" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="662">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="875" y="120" width="75" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="inc tot" Note="" FlowRate="[Total ED Disp]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="663">
      <mxCell style="flow" parent="1" target="662" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint x="800" y="136.25" as="sourcePoint" />
          <mxPoint y="66.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="664">
      <mxCell style="link" parent="1" source="645" target="663" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Stock name="Cum DispOK" Note="" InitialValue="0" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="665">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="910" y="170" width="50" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="inc in target" Note="" FlowRate="[care to disp]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="667">
      <mxCell style="flow" parent="1" target="665" edge="1">
        <mxGeometry x="-5" y="-41.24999999999999" width="100" height="100" as="geometry">
          <mxPoint x="835" y="168.75" as="sourcePoint" />
          <mxPoint x="-5" y="58.75000000000001" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="668">
      <mxCell style="link" parent="1" source="64" target="667" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Cum NEAT Performance" Note="" Equation="IfThenElse([Cum ED Disp]&gt;0, 100*[Cum DispOK]/[Cum ED Disp],100)" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="669">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="980" y="151.25" width="100" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="670">
      <mxCell style="link" parent="1" source="662" target="669" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="671">
      <mxCell style="link" parent="1" source="665" target="669" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="674">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="682" target="454" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Flow name="fail to triage" Note="" FlowRate="14/40" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="676">
      <mxCell style="flow" parent="1" source="26" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="140" y="316.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Variable name="Admitted in ED spaces" Note="0=No 1=Yes" Equation="0" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="true" SliderMax="1" SliderMin="0" SliderStep="1" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="677">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="780" y="456.25" width="80" height="53.75" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="678">
      <mxCell style="link" parent="1" source="677" target="40" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="679">
      <mxCell style="link" parent="1" source="677" target="71" edge="1">
        <mxGeometry y="-33.74999999999999" width="100" height="100" as="geometry">
          <mxPoint y="66.25" as="sourcePoint" />
          <mxPoint x="100" y="-33.74999999999999" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Admitted in ED" Note="" Equation="[ED Admit]*[Admitted in ED spaces]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="682">
      <mxCell style="variable;strokeColor=#FF00FF" parent="1" vertex="1">
        <mxGeometry x="582.5" y="471.25" width="70" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="683">
      <mxCell style="link" parent="1" source="677" target="682" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="684">
      <mxCell style="link" parent="1" source="63" target="682" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Occupancy Ratio %" Note="" Equation="100*[Inpatient ward]/[Bed Capacity]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="714">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1020" y="401.25" width="70" height="46.25" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="716">
      <mxCell style="link" parent="1" source="54" target="714" edge="1">
        <mxGeometry x="990" y="-93.75" width="100" height="100" as="geometry">
          <mxPoint x="1115" y="229.81111667228242" as="sourcePoint" />
          <mxPoint x="1090" y="-93.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="717">
      <mxCell style="link" parent="1" source="659" target="714" edge="1">
        <mxGeometry x="242.67225789651525" y="263.75" width="100" height="100" as="geometry">
          <mxPoint x="242.67225789651525" y="363.75" as="sourcePoint" />
          <mxPoint x="342.67225789651525" y="263.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Stock name="Cum Occupancy" Note="" InitialValue="0" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="718">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="1055" y="538.75" width="80" height="50" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="Flow" Note="" FlowRate="[Inpatient ward]+[Adm in EMU]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="719">
      <mxCell style="flow;startFill=0" parent="1" target="718" edge="1">
        <mxGeometry x="905" y="-206.25" width="100" height="100" as="geometry">
          <mxPoint x="1060" y="460" as="sourcePoint" />
          <mxPoint x="905" y="-106.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="720">
      <mxCell style="link" parent="1" source="54" target="719" edge="1">
        <mxGeometry x="1005" y="-100.625" width="100" height="100" as="geometry">
          <mxPoint x="1065.8163265306123" y="231.25" as="sourcePoint" />
          <mxPoint x="1105" y="-100.625" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Stock name="Cum Bed Capacity" Note="" InitialValue="0" StockMode="Store" Delay="10" Volume="100" NonNegative="true" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AllowNegatives="false" oldId="undefined" id="721">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="1062.5" y="355" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="Flow" Note="" FlowRate="[Bed Capacity]+[EMU Capacity]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="722">
      <mxCell style="flow;startFill=0" parent="1" target="721" edge="1">
        <mxGeometry x="1038.75" y="-150" width="100" height="100" as="geometry">
          <mxPoint x="1138.75" y="290" as="sourcePoint" />
          <mxPoint x="1038.75" y="-50" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="723">
      <mxCell style="link" parent="1" source="659" target="722" edge="1">
        <mxGeometry x="242.67225789651525" y="263.75" width="100" height="100" as="geometry">
          <mxPoint x="242.67225789651525" y="363.75" as="sourcePoint" />
          <mxPoint x="342.67225789651525" y="263.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Cum Occ Ratio %" Note="" Equation="IfThenElse([Cum Bed Capacity]&gt;0, 100*[Cum Occupancy]/[Cum Bed Capacity],50)" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="724">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1090" y="446.25" width="70" height="43.75" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="725">
      <mxCell style="link" parent="1" source="721" target="724" edge="1">
        <mxGeometry x="830" y="-143.75" width="100" height="100" as="geometry">
          <mxPoint x="830" y="-43.75" as="sourcePoint" />
          <mxPoint x="930" y="-143.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="726">
      <mxCell style="link" parent="1" source="718" target="724" edge="1">
        <mxGeometry x="830" y="-143.75" width="100" height="100" as="geometry">
          <mxPoint x="830" y="-43.75" as="sourcePoint" />
          <mxPoint x="930" y="-143.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Adm in EMU" Note="" Equation="[EMU]+[EMU 1+]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="727">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="765" y="670" width="80" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="728">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="36" target="727" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="729">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="38" target="727" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="730">
      <mxCell style="link" parent="1" source="727" target="719" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="EMU Capacity" Note="" Equation="10" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="731">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="615" y="670" width="90" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Unoccupied EMU beds" Note="" Equation="[EMU Capacity]-[Adm in EMU]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="732">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="592.5" y="600" width="100" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="733">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="731" target="732" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="734">
      <mxCell style="link;strokeColor=#FF0000" parent="1" source="727" target="732" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="735">
      <mxCell style="link;strokeColor=#0000FF" parent="1" source="732" target="40" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Ghost Source="731" name="EMU Capacity" id="737">
      <mxCell style="variable;opacity=30" parent="1" vertex="1">
        <mxGeometry x="1050" y="231.25" width="90" height="50" as="geometry" />
      </mxCell>
    </Ghost>
    <Link name="Link" Note="" BiDirectional="false" id="738">
      <mxCell style="link" parent="1" source="737" target="722" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Display name="Occupancy" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" yAxis2="" showMarkers="false" showLines="true" showArea="false" ThreeDimensional="false" Primitives="714,724" Primitives2="454,732" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" legendPosition="Automatic" id="739">
      <mxCell style="display" parent="1" vertex="1" visible="0">
        <mxGeometry x="10" y="10" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Display name="Default Display" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" yAxis2="" showMarkers="false" showLines="true" showArea="false" ThreeDimensional="false" Primitives="" Primitives2="" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" legendPosition="Automatic" id="745">
      <mxCell style="display" parent="1" vertex="1" visible="0">
        <mxGeometry x="10" y="10" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Display name="Default Display" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="" yAxis2="" showMarkers="false" showLines="true" showArea="false" ThreeDimensional="false" Primitives="" Primitives2="" AutoAddPrimitives="false" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" legendPosition="Automatic" id="746">
      <mxCell style="display" parent="1" vertex="1" visible="0">
        <mxGeometry x="10" y="10" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Flow name="48hrs" Note="" FlowRate="[Recent ED Discharge]/[re-present time window]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="747">
      <mxCell style="flow" parent="1" source="62" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="750" y="30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Variable name="re-present time window" Note="" Equation="48" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="748">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="810" y="50" width="100" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="749">
      <mxCell style="link" parent="1" source="748" target="747" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Flow name="re-present" Note="" FlowRate="[planned review]+[unplanned represent]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="751">
      <mxCell style="flow" parent="1" source="62" target="26" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint x="17.5" y="100.625" as="sourcePoint" />
          <mxPoint x="117.5" y="0.625" as="targetPoint" />
          <Array as="points">
            <mxPoint x="407.5" y="20.625" />
          </Array>
          <mxPoint x="-280" y="-19.6875" as="offset" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Variable name="unplanned represent" Note="around 0.5 percent" Equation="1/24" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="752">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="220" y="34.37500000000001" width="80" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="753">
      <mxCell style="link" parent="1" source="752" target="751" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="planned review" Note="around 6 percent of arrivals; need to subtract from arrive" Equation="0" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="754">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="190" y="91.25" width="70" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="755">
      <mxCell style="link" parent="1" source="754" target="751" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Folder name="Potential Additions " Note="" Type="None" Solver="{&quot;enabled&quot;: false, &quot;algorithm&quot;: &quot;RK1&quot;, &quot;timeStep&quot;: 1}" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" AgentBase="" oldId="undefined" id="624">
      <mxCell style="folder;image=None;shape=rectangle;" parent="1" vertex="1">
        <mxGeometry x="1230" y="100" width="205" height="583.75" as="geometry">
          <mxRectangle x="1230" y="100" width="150" height="30" as="alternateBounds" />
        </mxGeometry>
      </mxCell>
    </Folder>
    <Converter name="Service fraction" Note="clinical team resources for assessment, investigation, stabilising treatment and reviews; need depends on complexity and age" Source="Time" Data="0,0.031; 1,0.029; 2,0.026; 3,0.023; 4,0.02; 5,0.018; 6,0.018; 7,0.026; 8,0.037; 9,0.051; 10,0.059; 11,0.062; 12,0.061; 13,0.059; 14,0.057; 15,0.056; 16,0.054; 17,0.05; 18,0.051; 19,0.045; 20,0.047; 21,0.043; 22,0.041; 23,0.036; 24,0.031" Interpolation="Linear" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="462">
      <mxCell style="converter" parent="624" vertex="1">
        <mxGeometry x="50" y="79.375" width="70" height="43.75" as="geometry" />
      </mxCell>
    </Converter>
    <Stock name="Workload" Note="" InitialValue="0" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="589">
      <mxCell style="stock" parent="624" vertex="1">
        <mxGeometry x="110" y="211.25" width="70" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="add" Note="" FlowRate="0" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="590">
      <mxCell style="flow" parent="624" target="589" edge="1">
        <mxGeometry x="-180" y="-458.75" width="100" height="100" as="geometry">
          <mxPoint x="20" y="231.25" as="sourcePoint" />
          <mxPoint x="-180" y="-358.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="remove" Note="" FlowRate="0" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" oldId="undefined" id="591">
      <mxCell style="flow" parent="624" source="589" edge="1">
        <mxGeometry x="-180" y="-458.75" width="100" height="100" as="geometry">
          <mxPoint x="-180" y="-358.75" as="sourcePoint" />
          <mxPoint x="290" y="231.25" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Variable name="Daily Resources" Note="" Equation="5" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="592">
      <mxCell style="variable" parent="624" vertex="1">
        <mxGeometry x="20" y="20" width="80" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Acute completion rate per resource" Note="depends on complexity of patients and quality of resources" Equation="0.5" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="593">
      <mxCell style="variable" parent="624" vertex="1">
        <mxGeometry x="40" y="156.25" width="130" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Time in ED" Note="" Equation="3.9" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="630">
      <mxCell style="variable" parent="624" vertex="1">
        <mxGeometry x="117.5" y="278.75" width="50" height="32.49999999999999" as="geometry" />
      </mxCell>
    </Variable>
    <Ghost Source="628" name="time in preCare" oldId="undefined" id="631">
      <mxCell style="variable;opacity=30" parent="624" vertex="1">
        <mxGeometry x="115" y="325.625" width="70" height="41.875" as="geometry" />
      </mxCell>
    </Ghost>
    <Variable name="Time in ED Care" Note="used actual overnight times to calculate base completion rate" Equation="[Time in ED]-[time in preCare]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="undefined" id="632">
      <mxCell style="variable" parent="624" vertex="1">
        <mxGeometry x="25" y="293.75" width="70" height="40" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="633">
      <mxCell style="link;strokeColor=#0000FF" parent="624" source="630" target="632" edge="1">
        <mxGeometry x="-745" y="223.75" width="100" height="100" as="geometry">
          <mxPoint x="-745" y="323.75" as="sourcePoint" />
          <mxPoint x="-645" y="223.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" oldId="undefined" id="634">
      <mxCell style="link;strokeColor=#FF0000" parent="624" source="631" target="632" edge="1">
        <mxGeometry x="-745" y="223.75" width="100" height="100" as="geometry">
          <mxPoint x="-745" y="323.75" as="sourcePoint" />
          <mxPoint x="-645" y="223.75" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Text name="Clinical team numbers and experience" LabelPosition="Middle" Note="use to calculate ED completion rate" id="740">
      <mxCell style="text;fontStyle=0;fontSize=18" parent="624" vertex="1">
        <mxGeometry x="5" y="385" width="200" height="50" as="geometry" />
      </mxCell>
    </Text>
    <Stock name="Neat L Scale Lo" Note="" InitialValue="60" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="744">
      <mxCell style="stock;strokeColor=#CCFFFF" parent="624" vertex="1">
        <mxGeometry x="60" y="512.5" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Stock name="Neat L Scale Hi" Note="" InitialValue="100" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="743">
      <mxCell style="stock;strokeColor=#CCFFFF" parent="624" vertex="1">
        <mxGeometry x="52.5" y="462.5" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Button name="Run" Note="" Function="runModel();&#xa;graph.fit();" Image="Play" FlipHorizontal="false" FlipVertical="false" LabelPosition="Bottom" id="756">
      <mxCell style="button;image=http://insightmaker.com/builder/images/SD/Play.png;imageFlipV=0;imageFlipH=0;shape=image;labelPosition=middle;align=center;verticalLabelPosition=bottom;verticalAlign=top;fillColor=#339966" parent="1" vertex="1">
        <mxGeometry x="10" y="331.25" width="70" height="40" as="geometry" />
      </mxCell>
    </Button>
  </root>
</InsightMakerModel>`);

// Create a header row containing the attributes of a Stock
let header = ['macros', 'solutionAlgorithm', 'timeStart', 'timeUnit', 'timeLength', 'timeStep'];

let tsvData = header.join('\t') + '\n';


let modelData = [model.globals, model.algorithm, model.timeStart, model.timeUnits, model.timeLength, model.timeStep];
tsvData += modelData.join('\t') + '\n';

console.log(`${model.globals}, ${model.algorithm}, ${JSON.stringify(model.customUnits)}, ${model.settings}`);

// Create TSV file containing Stock data
fs.appendFile('modelData.tsv', tsvData, function (err) {
  if (err) throw err;
  console.log('Successfully saved data to tsv file :)');
});