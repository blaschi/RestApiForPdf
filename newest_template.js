//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<Document-Level>
//<ACRO_source>!ADBE::0050_FieldInit_Barcode</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0050_FieldInit_Barcode ***********/
if ((app.viewerVersion < 5) && (app.viewerVersion > 0) && (this.getField("Barcode") != null))
    this.getField("Barcode").value = "";

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>!ADBE::0050_FieldInit_Barcode8</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0050_FieldInit_Barcode8 ***********/
if ((app.viewerVersion < 5) && (app.viewerVersion > 0) && (this.getField("Barcode8") != null))
    this.getField("Barcode8").value = "";

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>!ADBE::0050_FieldInit_Form Barcode</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0050_FieldInit_Form Barcode ***********/
if ((app.viewerVersion < 5) && (app.viewerVersion > 0) && (this.getField("Form Barcode") != null))
    this.getField("Form Barcode").value = "";

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>!ADBE::0100_VersChkStrings</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0100_VersChkStrings ***********/
if (typeof(this.ADBE) == "undefined") this.ADBE = new Object();
ADBE.LANGUAGE = "ENU";
ADBE.Viewer_string_Title = "Adobe Acrobat";

ADBE.Reader_string_Need_New_Version_Msg = "This PDF form requires a newer version of Adobe Reader. Without a newer version, the form may display, but may not work properly. Some form elements might not be visible at all. If an internet connection is available, clicking OK will open your browser to a web page where you can obtain the latest version.";
ADBE.Viewer_string_PMD_Old = "A newer version of Adobe software is required. For more information, copy and paste the URL below into a browser.";
ADBE.Viewer_string_PMD = "This document requires a newer version of Adobe Acrobat. Without a newer version, it might not work properly. Some elements might not be visible at all. Click OK to get more information to obtain the latest version of Adobe Reader.";
ADBE.Viewer_string_Update_Desc = "Adobe Interactive Forms Update";

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>!ADBE::0100_VersChkVars</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0100_VersChkVars ***********/
ADBE.PMD_Need_Version = 7.05;
if (app.platform == "UNIX" && ADBE.PMD_Need_Version < 8) ADBE.PMD_Need_Version = 8;
if (typeof(ADBE.Reader_Value_Asked) == "undefined") ADBE.Reader_Value_Asked = false;
if (typeof(ADBE.Viewer_Value_Asked) == "undefined") ADBE.Viewer_Value_Asked = false;

if (typeof(ADBE.Reader_Need_Version) == "undefined" || ADBE.Reader_Need_Version < ADBE.PMD_Need_Version)
{
    ADBE.Reader_Need_Version = ADBE.PMD_Need_Version;
    ADBE.Reader_Value_New_Version_URL = "http://cgi.adobe.com/special/acrobat/update";
    ADBE.SYSINFO = "?p=" + app.platform + "&v=" + app.viewerVersion + "&l=" + app.language + "&c=" + app.viewerType + "&r=" + ADBE.Reader_Need_Version;
}
if (typeof(ADBE.Viewer_Need_Version) == "undefined" || ADBE.Viewer_Need_Version < ADBE.PMD_Need_Version)
{
    ADBE.Viewer_Need_Version = ADBE.PMD_Need_Version;
    ADBE.Viewer_Value_New_Version_URL = "http://cgi.adobe.com/special/acrobat/update";
    ADBE.SYSINFO = "?p=" + app.platform + "&v=" + app.viewerVersion + "&l=" + app.language + "&c=" + app.viewerType + "&r=" + ADBE.Viewer_Need_Version;
}

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>!ADBE::0200_VersChkCode_PMD1</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0200_VersChkCode_PMD1 ***********/
if (app.viewerType == "Reader")
{
    if (app.viewerVersion < ADBE.Reader_Need_Version && !ADBE.Reader_Value_Asked)
    {
        if (app.alert(ADBE.Reader_string_Need_New_Version_Msg, 1, 1) == 1) this.getURL(ADBE.Reader_Value_New_Version_URL + ADBE.SYSINFO, false);
            ADBE.Reader_Value_Asked = true;
    }
}
else
{
    if (app.viewerVersion < ADBE.Viewer_Need_Version && !ADBE.Viewer_Value_Asked)
    {
        if (app.viewerVersion > 7)
        {
            if (app.alert(ADBE.Viewer_string_PMD, 1, 1) == 1)
                app.findComponent({cType:"Plugin", cName:"XFA", cDesc: ADBE.Viewer_string_Update_Desc});
        }
        else if (app.viewerVersion > 6 && ADBE.Viewer_Need_Version < 7)
        {
            if (app.alert(ADBE.Viewer_string_PMD, 1, 1) == 1)
                app.findComponent({cType:"UDPatch", cName:"602Patch", cDesc: ADBE.Viewer_string_Update_Desc});
        }
        else
            app.response({cQuestion:ADBE.Viewer_string_PMD_Old, cDefault:ADBE.Viewer_Value_New_Version_URL + ADBE.SYSINFO, cTitle:ADBE.Viewer_string_Title});
    ADBE.Viewer_Value_Asked = true;
    }
}

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>!ADBE::TextUpdate.js</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::TextUpdate.js ***********/
if (app.viewerVersion < 9) 
{
	var warn = "This file may contain text that appears correctly only in Acrobat 9, Adobe Reader 9, or later versions.";
	app.alert(warn, 1, 0);
}

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>SetFieldValues</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:SetFieldValues ***********/


var g_ladder_type_value = "";
var g_transfer_value = "";
var g_purchased_value = "";
var g_autoset_variable = "No";
var sName1 = "Cusip Template";

//Page number for Cusip Template
var g_cusipPage = 11;
//Stores whether Cusip page exists or not
var cusipSpawned = false;

var g_strategy = " ";
var c_esg_global = "";

var municipalTaxExemptLadder = "Municipal Ladder - Tax Exempt";
var municipalTaxableLadder = "Municipal Ladder - Taxable";
var corporateLadder = "Corporate Ladder";

function SetFieldValues(control, val) { 
    var c_ladder_type = this.getField("Ladder Type");
	var c_ladder_benchmark = this.getField("Ladder Benchmark");
    var c_ladder_strategy = this.getField("Ladder Strategy");
	var c_benchmark = this.getField("Benchmark");
    var c_start_year = this.getField("Starting Maturity Year");
    var c_end_year = this.getField("Ending Maturity Year");
	var c_start_year_label = this.getField("Starting Maturity Year Label");
    var c_end_year_label = this.getField("Ending Maturity Year Label");
	var c_start_month = this.getField("Starting Maturity Month");
    var c_end_month = this.getField("Ending Maturity Month");
	var c_start_month_label = this.getField("Starting Maturity Month Label");
    var c_end_month_label = this.getField("Ending Maturity Month Label");
	var c_corp_note = this.getField("Corp Imp Notes");
	var c_muni_note = this.getField("Muni Imp Notes");	
	var c_muni_qual = this.getField("Muni Credit Quality");
	var c_transfer = this.getField("Transfer To EVM");
	var c_purchased = this.getField("Purchased By EVM");
	var c_summary = this.getField("Summary");
	var c_managerdiscretion = this.getField("ManagerDiscretion");
	var c_targetmonth = this.getField("Target_Month");
	var c_targetday = this.getField("Target_Day");
	var c_targetyear = this.getField("Target_Year");
	var c_targetmat_lbl = this.getField("Target_Maturity_Label");
	var c_amt_q = this.getField("AMT Question");
	//var c_maturity_management = this.getField("Maturity Management");
	
	var c_strategy = this.getField("Strategy");	
	var c_corp_header = this.getField("Corp Header");	
	//var c_corp_inst = this.getField("Corp Instructions");
	var c_corp_qual = this.getField("Corp Credit Quality");	
	var c_corp_qual_label = this.getField("Corp Quality Label");	
	//var c_muni_inst = this.getField("Muni Instructions");	
	var c_muni_header = this.getField("Muni Header");	
	var c_corp_qual = this.getField("Corp Credit Quality");
	var c_option_label = this.getField("National State Label");
	
	var c_ESGlink = this.getField("CORP ESG External Link");
	var c_muni_qual_label = this.getField("Muni Quality Label");	
	var c_important_notes = this.getField("Important Notes");	
	var c_vrdn_note = this.getField("VRDN Note");	
	var c_frn = this.getField("FRN Ans");
	var c_frn_label = this.getField("FRNs");
	var c_tax_loss = this.getField("Tax loss");
	var c_amt = this.getField("AMT");
	var c_esg = this.getField("ESG");
	var c_esg_label = this.getField("ESG Option");
	var c_esg_add_label = this.getField("ESG Additional Label");
	var c_esg_add_options = this.getField("ESG Additional Options");
	var c_link = this.getField("External Link");
	var c_manual_notes_button = this.getField("Manual Notes Button");
	var c_manual_notes_box = this.getField("Manual Notes Box");
	
	
    switch (control){
		case "Set ESG":
			c_esg_global = val;
			switch(val){
				case "Yes":
					if (c_strategy.value == corporateLadder) {
						c_esg_add_label.display = display.visible;
						c_esg_add_options.display = display.visible;			
					}

					if (g_ladder_type_value == "Standard Ladder") {
						c_ladder_strategy.setItems([" ",											
													"National",
													"CA - State Preference",
													"CA - State Specific",
													"NY - State Preference",
													"NY - State Specific"]);
						c_ladder_strategy.value = " ";
						c_muni_qual.setItems(["A-"]);
						c_muni_qual.value = "A-";
					} else if (g_ladder_type_value == "Ultra-Short Maturity" || g_ladder_type_value == "Target Maturity Date") {
						c_ladder_strategy.setItems([" ",											
													"National",
													"CA - State Preference",
													"NY - State Preference"]);
						c_ladder_strategy.value = " ";							
						c_muni_qual.setItems(["A-/SP-2"]);
						c_muni_qual.value = "A-/SP-2";	
					}	 
				break;
	
				case "No":
					c_esg_add_label.display = display.hidden;
					c_esg_add_options.display = display.hidden;		
					c_esg_add_options.value = " ";
					if (g_ladder_type_value == "Standard Ladder") {
						c_ladder_strategy.setItems(getAllStrategiesArray());
					} else if (g_ladder_type_value == "Ultra-Short Maturity" || g_ladder_type_value == "Target Maturity Date") {
						c_ladder_strategy.setItems([" ",											
												"National",
												"CA - State Preference",
												"NY - State Preference"]);
						c_ladder_strategy.value = " ";
					} 
				break;
				
				default:	
					c_esg_add_label.display = display.hidden;
					c_esg_add_options.display = display.hidden;		
					c_esg_add_options.value = " ";
					if (g_ladder_type_value.value == "Standard Ladder") {
						c_ladder_strategy.setItems(getAllStrategiesArray());
						c_ladder_strategy.value = " ";
					} else if (g_ladder_type_value == "Ultra-Short Maturity" || g_ladder_type_value == "Target Maturity Date") {
						c_ladder_strategy.setItems([" ",											
												"National",
												"CA - State Preference",
												"NY - State Preference"]);
						c_ladder_strategy.value = " ";
					} 
				break;
			}
		break;
	
		case "Set ESG Additional":
			switch(val){
				case "Calvert ESG":
					c_ESGlink.display=display.hidden;
				break;
	
				case "ESG Screens":
					c_ESGlink.display=display.visible;
				break;
	
				default:
					c_ESGlink.display=display.hidden;
				break;
			}
	
		break;
		
		case "Set Strategy":

			g_strategy = val;

			switch(val){
				case municipalTaxExemptLadder:
					c_manual_notes_button.display = display.visible;
					c_manual_notes_box.display = display.visible;
					c_corp_header.display = display.hidden;
					//c_corp_inst.display = display.hidden;
					c_corp_qual.display = display.hidden;
					c_corp_qual_label.display = display.hidden;
					c_corp_note.display = display.hidden;
					c_muni_note.display = display.visible;
					//c_muni_inst.display = display.visible;
					c_muni_header.display = display.visible;
					c_option_label.display = display.visible;
					c_ladder_strategy.display = display.visible;
					c_amt_q.display = display.visible;
					c_amt.display = display.visible;
					c_esg_label.display = display.visible;
					c_esg.display = display.visible;
					c_muni_qual.display = display.visible;
					c_muni_qual_label.display = display.visible;
					c_esg_add_label.display = display.hidden;
					c_esg_add_options.display = display.hidden;
					c_ESGlink.display=display.hidden;
					c_benchmark.setItems ([" ","Short: Average Maturity < 5.5 yrs","Intermediate: Average Maturity >= 5.5 yrs, < 9 yrs","Long: Avg. Maturity >= 9 yrs, <= 14 yrs","Long Plus: Avg. Maturity > 14 yrs"]); 
					c_benchmark.value = " ";
					c_ladder_type.setItems([" ",
											"Standard Ladder",
											"Ultra-Short Maturity",
											"Target Maturity Date"
										]);			
					//c_maturity_management.value = " ";	
					c_esg.value = " ";										
					c_ladder_type.value = " ";
					c_muni_qual.value = " ";
					c_ladder_benchmark.value = " "; 
					c_transfer.value = " ";
					c_purchased.value = " ";
					c_amt.value = " ";
					c_frn.value = " ";
					c_tax_loss.value = " ";
					c_manual_notes_box.value = " ";
					ShowHideAppendix(val);
				break;

				case municipalTaxableLadder:
					c_manual_notes_button.display = display.visible;
					c_manual_notes_box.display = display.visible;
					c_corp_header.display = display.hidden;
					//c_corp_inst.display = display.hidden;
					c_corp_qual.display = display.hidden;
					c_corp_qual_label.display = display.hidden;
					c_corp_note.display = display.hidden;
					c_muni_note.display = display.visible;
					//c_muni_inst.display = display.visible;
					c_muni_header.display = display.visible;
					c_option_label.display = display.visible;
					c_ladder_strategy.display = display.visible;
					c_amt_q.display = display.hidden;
					c_amt.display = display.hidden;
					c_esg_label.display = display.hidden;
					c_esg.display = display.hidden;
					c_muni_qual.display = display.visible;
					c_muni_qual_label.display = display.visible;
					c_frn_label.display = display.hidden;
					c_frn.display = display.hidden;
					c_esg_add_label.display = display.hidden;
					c_esg_add_options.display = display.hidden;
					c_ESGlink.display=display.hidden;
					c_benchmark.setItems ([" ","Short: Average Maturity < 5.5 yrs","Intermediate: Average Maturity >= 5.5 yrs, < 9 yrs","Long: Avg. Maturity >= 9 yrs, <= 14 yrs","Long Plus: Avg. Maturity > 14 yrs"]); 
					c_benchmark.value = " ";
					c_ladder_type.setItems(["Standard Ladder"]);
					c_ladder_type.value = "Standard Ladder";
					//c_maturity_management.value = " ";
					c_muni_qual.value = " ";
					c_transfer.value = " ";
					c_purchased.value = " ";
					c_tax_loss.value = " ";
					c_manual_notes_box.value = " ";
					ShowHideAppendix(val);
				break;

				case corporateLadder:
					c_manual_notes_button.display = display.visible;
					c_manual_notes_box.display = display.visible;
					c_corp_header.display = display.visible;
					//c_corp_inst.display = display.visible;
					c_corp_qual.display = display.visible;
					c_corp_qual_label.display = display.visible;
					//c_muni_inst.display = display.hidden;
					c_muni_header.display = display.hidden;
					c_option_label.display = display.hidden;
					c_ladder_strategy.display = display.hidden;
					c_muni_qual.display = display.hidden;
					c_muni_qual_label.display = display.hidden;
					c_corp_note.display = display.visible;
					c_muni_note.display = display.hidden;
					c_esg_label.display = display.visible;
					c_esg.display = display.visible;
					c_amt_q.display = display.hidden;
					c_amt.display = display.hidden;
					c_frn_label.display = display.hidden;
					c_frn.display = display.hidden;
					c_ESGlink.display=display.hidden;
					c_ladder_type.setItems([" ",
											"Standard Ladder",
											"Ultra-Short Maturity",
											"Target Maturity Date"
										]);					
					c_ladder_type.value = " ";
					//c_maturity_management.value = " ";
					c_ladder_type.value = " ";
					c_benchmark.setItems ([" ","","Short: Average Maturity < 3 yrs","Intermediate: Average Maturity => 3 yrs, < 5.5 yrs","Long: Avg. Maturity => 5.5 yrs"]); 
					c_benchmark.value = "";
					c_ladder_strategy.value = " "; 
					c_corp_qual.setItems([" ", "A-", "BBB-", "BB-"]);  
					c_corp_qual.value = " "; 
					c_ladder_benchmark.value = " "; 
					c_transfer.value = " ";
					c_purchased.value = " ";
					c_esg.value = " ";
					c_amt.value = " ";
					c_frn.value = " ";
					c_tax_loss.value = " ";
					c_manual_notes_box.value = " ";
					ShowHideAppendix(val);
				break;
				
				default:
					c_manual_notes_button.display = display.visible;
					c_manual_notes_box.display = display.visible;
					c_corp_header.display = display.hidden;
					//c_corp_inst.display = display.hidden;
					c_corp_qual.display = display.hidden;
					c_corp_qual_label.display = display.hidden;
					c_amt_q.display = display.hidden;
					c_amt.display = display.hidden;
					c_corp_note.display = display.hidden;
					c_muni_note.display = display.hidden;
					//c_muni_inst.display = display.visible;
					c_muni_header.display = display.visible;
					c_option_label.display = display.visible;
					c_ladder_strategy.display = display.visible;
					c_muni_qual.display = display.visible;
					c_muni_qual_label.display = display.visible;
					c_frn_label.display = display.hidden;
					c_frn.display = display.hidden;
					c_esg_label.display = display.hidden;
					c_esg.display = display.hidden;
					c_esg_add_label.display = display.hidden;
					c_esg_add_options.display = display.hidden;
					c_ESGlink.display=display.hidden;
					//c_maturity_management.value = " ";
					c_transfer.setItems([" "," "]); 
					c_purchased.setItems([" "," "]); 
					c_transfer.value = " ";
					c_purchased.value = " ";
					c_ladder_type.setItems([" "]);
					c_ladder_type.value = " ";
					c_ladder_strategy.value = " "; 
					c_muni_qual.setItems([" "," "]); 
					c_muni_qual.value = " "; 
					c_benchmark.setItems ([" "]); 
					c_benchmark.value = " ";
					c_ladder_benchmark.value = " "; 
					c_esg.value = " ";
					c_transfer.value = " ";
					c_purchased.value = " ";
					c_amt.value = " ";
					c_frn.value = " ";
					c_tax_loss.value = " ";
					c_manual_notes_box.value = " ";
					ShowHideAppendix(val);
				break;
			}
		break;
	case "End Maturity Year":
		
				var g_sum_maturitiy	= 0;
				var g_average_maturitiy	= 0;	
				var g_start = parseInt(c_start_year.value,10);
				var g_end = parseInt(val,10);
				
				g_sum_maturitiy = g_start + g_end;
				g_average_maturitiy = g_sum_maturitiy / 2;
				
			
			/* if (g_strategy == municipalTaxExemptLadder || g_strategy == municipalTaxableLadder) {
				if (g_average_maturitiy < 5.5) { 
					c_benchmark.value = "Short: Average Maturity < 5.5 yrs"; 
				}
				else if (g_average_maturitiy > 5.49 && g_average_maturitiy < 9 ) { 
					c_benchmark.value = "Intermediate: Average Maturity >= 5.5 yrs, < 9 yrs";
				}
				else if (g_average_maturitiy > 8.99 && g_average_maturitiy < 14.01 ) { 
					c_benchmark.value = "Long: Avg. Maturity >= 9 yrs, <= 14 yrs"; 
				}
				else if (g_average_maturitiy > 14 ) { 
					c_benchmark.value = "Long Plus: Avg. Maturity > 14 yrs";
				}
			} else if  (g_strategy == corporateLadder) {
				if (g_average_maturitiy < 3) { 
					c_benchmark.value = "Short: Average Maturity < 3 yrs"; 
				}
				else if (g_average_maturitiy > 2.99 && g_average_maturitiy < 5.5 ) { 
					c_benchmark.value = "Intermediate: Average Maturity => 3 yrs, < 5.5 yrs"; 
				}
				else if (g_average_maturitiy > 5.49 ) { 
					c_benchmark.value = "Long: Avg. Maturity => 5.5 yrs";
				}
			} */
						
		break;
		
		case "Set Transfer ToolTip":			
			switch(val){
				case "Not Applicable: Funded with Cash":
					c_transfer.userName = "" ;
					c_link.display = display.hidden;
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }	
				break;
				case "Transition to Selected Strategy and/or Maturity Range (standard)":
					c_transfer.userName = "This is the standard option. Securities that are not in the selected Maturity Range will be sold. As noted above, if there is a change in Strategy, depending upon the previous and new Strategy, Transferred Securities in the selected Maturity Range may or may not be sold."					
					if (c_tax_loss.value == "Yes")
					{c_link.display = display.visible}
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }	
				break;
				case "Turnover with Relative Value Trading to Maintain Selected Maturity Range":
					c_transfer.userName = "Turnover will generally be limited to maturing and called obligations or as directed by Client. Accordingly, unless otherwise directed, all Transferred Securities with maturities inside or outside of the selected Maturity Range will be held to maturity and not be sold."
					if (c_tax_loss.value == "Yes")
					{c_link.display = display.visible}
					if (!g_isPurchaseValueSet) {
						g_isTransferValueSet = true;
						c_purchased.value = "Turnover with Relative Value Trading to Maintain Selected Maturity Range";
						g_isPurchaseValueSet = true;
					}
				break;		
				case "No Turnover/Hold All to Maturity and Reinvest Proceeds in Maturity Range Selected":
					c_transfer.userName = "Turnover will generally be limited to maturing and called obligations or as directed by Client. Accordingly, unless otherwise directed, all Transferred Securities with maturities inside or outside of the selected Maturity Range will be held to maturity and not be sold."
					if (c_tax_loss.value == "Yes")
					{c_link.display = display.visible}
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }	
				break;				
				case "Hold Specific Securities to Maturity/List cusips and par amounts not to sell on the next page":
					c_transfer.userName = "Client may direct that only certain Transferred Securities be held to maturity. Directions not to sell certain obligations must be in writing and specify the issue, cusip and par amount of any obligation not to be sold."
					if (c_tax_loss.value == "Yes")
					{c_link.display = display.visible}
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }	
				break;
				case "No Turnover for Maturities Shorter than Starting Ladder Maturity":
					c_transfer.userName = "Turnover will generally be limited to maturing and called obligations or as directed by Client. Accordingly, unless otherwise directed, all Transferred Securities with maturities inside or outside of the selected Maturity Range will be held to maturity and not be sold."
					if (c_tax_loss.value == "Yes")
					{c_link.display = display.visible}
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }	
				break;		
				case "No Turnover for Maturities Longer than Starting Ladder Maturity":
					c_transfer.userName = "Turnover will generally be limited to maturing and called obligations or as directed by Client. Accordingly, unless otherwise directed, all Transferred Securities with maturities inside or outside of the selected Maturity Range will be held to maturity and not be sold."
					if (c_tax_loss.value == "Yes")
					{c_link.display = display.visible}
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }	
				break;
				case "No Turnover for Maturities Shorter than Ending Ladder Maturity":
					c_transfer.userName = "Turnover will generally be limited to maturing and called obligations or as directed by Client. Accordingly, unless otherwise directed, all Transferred Securities with maturities inside or outside of the selected Maturity Range will be held to maturity and not be sold."
					if (c_tax_loss.value == "Yes")
					{c_link.display = display.visible}
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }	
				break;
				case "No Turnover for Maturities Longer than Ending Ladder Maturity":
					c_transfer.userName = "Turnover will generally be limited to maturing and called obligations or as directed by Client. Accordingly, unless otherwise directed, all Transferred Securities with maturities inside or outside of the selected Maturity Range will be held to maturity and not be sold."
					if (c_tax_loss.value == "Yes")
					{c_link.display = display.visible}
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }	
				break;
				default:
					c_transfer.userName = "";
					c_purchased.userName = "";	
					c_link.display = display.hidden;	
					g_isTransferValueSet = false;
					if (g_isPurchaseValueSet && !g_isTransferValueSet) {	
					   c_purchased.value = " ";
				    }					
				break;
				}
				/* if (g_autoset_variable == "No" && (g_ladder_type_value != ""|| g_ladder_type_value != " "))
				{
					g_autoset_variable = "Yes";
					if (val == "Turnover with relative value trading to Maintain Selected Maturity Range")
					{
						if (c_purchased.value != "Turnover with relative value trading to Maintain Selected Maturity Range" && g_purchased_value != "")
						{							
							c_purchased.value = "Turnover with relative value trading to Maintain Selected Maturity Range";							
						}
					}
					else
					{
						}
					g_autoset_variable == "No";
				} */
				//check if we need to add the cusip list page
				//Pass selected Turnover option and page total value
				if (!cusipSpawned)
					_t_pg = this.numPages;
				addCusip(val, _t_pg);

			g_transfer_value = val;
			g_autoset_variable = "No";
			break;
							
		case "Set Purchased ToolTip":			
			switch(val){
				case "Transition to Selected Strategy and/or Maturity Range (standard)":
					c_purchased.userName = "This is the standard option. Securities will be sold when the years to maturity are approaching or below the Starting Ladder Maturity. Securities with a maturity of less than 1-year will generally be held to maturity."								
					g_isPurchaseValueSet = false;	
					if (g_isTransferValueSet && !g_isPurchaseValueSet) {
												
						c_transfer.value = " ";
					}
				break;
				
				case "No Turnover/Hold All to Maturity and Reinvest Proceeds in Maturity Range Selected":
					c_purchased.userName = "Turnover will generally be limited to maturing and called obligations or as directed by Client. Selecting this option will change the Maturity Range of holdings if the Starting Maturity is longer than 1-year because securities are held to maturity rather than being sold when the period to maturity is less than the Starting Maturity of the originally Selected Maturity Range. At maturity, proceeds will be invested in the selected Maturity Range."
					g_isPurchaseValueSet = false;	
					if (g_isTransferValueSet && !g_isPurchaseValueSet) {
												
						c_transfer.value = " ";
					}
				break;
				case "Turnover with Relative Value Trading to Maintain Selected Maturity Range":
					if (!g_isTransferValueSet) {
						g_isPurchaseValueSet = true;
						c_transfer.value = "Turnover with Relative Value Trading to Maintain Selected Maturity Range";						
						g_isTransferValueSet = true;
					}
				break;
				default:
					c_transfer.userName = "";
					c_purchased.userName = "";	
					g_isPurchaseValueSet = false;	
					//In case one of the ooptions is changed, the other option is reset
					if (g_isTransferValueSet && !g_isPurchaseValueSet) {
						c_transfer.value = " ";
					}			
				break;
			}
			/* if (g_autoset_variable == "No" && (g_ladder_type_value != ""|| g_ladder_type_value != " "))
			{
				g_autoset_variable = "Yes";
				if (val == "Turnover with relative value trading to Maintain Selected Maturity Range")
				{
					if (c_transfer.value != "Turnover with relative value trading to Maintain Selected Maturity Range" && g_transfer_value != "")
					{
						c_transfer.value = "Turnover with relative value trading to Maintain Selected Maturity Range";
					}
				}
				else
				{
									
				}
				g_autoset_variable == "No";
			} */
			g_purchased_value = val;
			g_autoset_variable = "No";
		break;		
		
		case "Set Manager Discretion":
			switch(val){
				case "Yes":
					c_ladder_type.setItems(["MD: Ultra-Short"]);
					c_ladder_strategy.setItems(["MD: Strategy"]); 
					c_ladder_benchmark.setItems(["MD: Ultra-Short"]); 
					c_muni_qual.setItems(["MD: Quality"]); 
					c_transfer.setItems(["MD: Turnover Transferred"]); 
					c_purchased.setItems(["MD: Turnover Purchased"]); 
					break;
				default:					
					c_ladder_type.setItems([" ","","Standard Ladder","Ultra-Short Maturity","Target Maturity Date"]); 
					c_transfer.setItems([" "," ", 
										 "Not Applicable: Funded with Cash", 
										 "Transition to Selected Strategy and/or Maturity Range (standard)", 
										 "No Turnover/Hold All to Maturity and Reinvest Proceeds in Selected Maturity Range", 
										 "Hold Specific Securities to Maturity/List cusips and par amounts not to sell on the next page" 
										 ]); 
					c_purchased.setItems([" "," ",
										  "Turnover to Maintain Selected Strategy and/or Maturity Range (standard)",
										  "No Turnover/Hold All to Maturity and Reinvest Proceeds in Selected Maturity Range"]); 
					c_ladder_type.readonly = false;				
					c_ladder_benchmark.readonly = false;				
					c_ladder_strategy.readonly = false;	
			break;			
			}
		break;	
	
		case "Set Ladder Type":
			g_ladder_type_value = val;
			g_autoset_variable = "No";
			switch(val){	
				case " ":						
					c_ladder_benchmark.setItems([" "," "]); 
					c_ladder_strategy.setItems([" "," "]); 
					c_ladder_benchmark.value = " ";	
					c_benchmark.value = " "
					c_benchmark.readonly = true
					c_ladder_strategy.value = " ";  
					c_ladder_benchmark.display = display.visible;
					c_targetmonth.display = display.hidden;
					c_targetday.display = display.hidden;
					c_targetyear.display = display.hidden;
					c_targetmat_lbl.display = display.hidden;
					c_tax_loss.value = " ";
					c_amt.value = " ";
					break;			
				case "":						
					c_ladder_benchmark.setItems([" "," "]); 
					c_ladder_strategy.setItems([" "," "]); 
					c_ladder_benchmark.value = " ";	
					c_benchmark.value = ""
					c_benchmark.readonly = true
					c_ladder_strategy.value = " "; 
					c_ladder_benchmark.display = display.visible;
					c_targetmonth.display = display.hidden;
					c_targetday.display = display.hidden;
					c_targetyear.display = display.hidden;
					c_targetmat_lbl.display = display.hidden;
					c_tax_loss.value = " ";
					c_amt.value = " ";

					break;	
				case "Standard Ladder":
					if (g_strategy == municipalTaxExemptLadder) {
						if (c_esg.value != "Yes") {
							c_ladder_strategy.setItems([" ",
														"National",
														"AZ - State Preference",
														"CA - State Specific",
														"CA - State Preference",
														"CO - State Preference",
														"CT - State Preference",
														"FL - Best Efforts",
														"GA - State Preference",
														"HI - Best Efforts",
														"IN - Best Efforts",
														"KY - Best Efforts",
														"LA - Best Efforts",
														"MA - State Specific",
														"MA - State Preference",
														"MD - State Preference",
														"MI - State Specific",
														"MI - State Preference",
														"MN - State Specific",
														"MN - State Preference",
														"M0 - State Preference",
														"NC - State Preference",
														"NJ - State Specific",
														"NJ - State Preference",
														"NY - State Specific",
														"NY - State Preference",
														"OH - State Specific",
														"OH - State Preference",
														"OR - State Preference",
														"PA - State Specific",
														"PA - State Preference",
														"SC - Best Efforts",
														"TN - Best Efforts",
														"TX - State Specific",
														"TX - State Preference",
														"UT - State Specific",
														"UT - State Preference",
														"VA - State Preference"]);
						} else {
							c_ladder_strategy.setItems([" ",
														"National",
														"CA - State Preference",
														"CA - State Specific",
														"NY - State Preference",
														"NY - State Specific",
													]);
							c_ladder_strategy.value = "National";
						}
					} else {
						c_ladder_strategy.setItems(["National"]);						
						c_ladder_strategy.value = "National";
					}
					c_ladder_benchmark.setItems([" ","1-12 Months","1-24 Months","1-36 Months", "Custom Maturity"]); 
					c_ladder_benchmark.display = display.hidden;
					c_targetmonth.display = display.hidden;
					c_targetday.display = display.hidden;
					c_targetyear.display = display.hidden;
					c_targetmat_lbl.display = display.hidden;		
					c_start_year_label.display = display.visible;
					c_end_year_label.display = display.visible;	
					c_start_year.display  = display.visible;
					c_end_year.display  = display.visible;	
					c_benchmark.readonly = true
					c_benchmark.value = " ";
					c_amt.value = " ";
					c_tax_loss.value = " ";
					c_start_year.readonly = false
					c_end_year.readonly = false
					if (g_strategy == corporateLadder) {
						c_start_year.setItems([" ", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);				
					} else {
						c_start_year.setItems([" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]); 
					}
					c_start_year.value  = " ";
					c_end_year.setItems([" "]);
					c_end_year.value  = " ";	
					c_esg.value = " ";
					//c_maturity_management.value = " ";	
					break;	
				case "Ultra-Short Maturity":
						
							c_ladder_strategy.setItems([" ","National",  "CA - State Preference", "NY - State Preference"]);
							c_ladder_strategy.value = " ";
							/* c_muni_qual.setItems(["A-"]);
							c_muni_qual.value = "A-"; */
						
					c_ladder_benchmark.display = display.visible;
					c_targetmonth.display = display.hidden;
					c_targetday.display = display.hidden;
					c_targetyear.display = display.hidden;
					c_targetmat_lbl.display = display.hidden;
					c_tax_loss.value = " ";
					c_amt.value = " ";
					if (c_strategy.value == municipalTaxExemptLadder)
					{ c_ladder_benchmark.setItems([" ","1-12 Months Ladder","1-24 Months Ladder","1-36 Months Ladder", "Custom Maturity Ladder","VRDNs","VRDNs & FRNs: (max 50%)"]);
					c_benchmark.value = "Short: Average Maturity < 5.5 yrs";
					c_benchmark.readonly = true
						}
					else
					{c_ladder_benchmark.setItems([" ","1-12 Months Ladder","1-24 Months Ladder","1-36 Months Ladder", "Custom Maturity Ladder"]);
					c_ladder_benchmark.value = " ";	
					c_ladder_strategy.value = " "; 
					c_benchmark.value = "Short: Average Maturity < 3 yrs";
					c_benchmark.readonly = true
						} 
					c_esg.value = " ";
					//c_maturity_management.value = " ";						
				break;	
				
				case "Target Maturity Date":
					c_ladder_benchmark.setItems([" "," "]); 						
 				   	c_targetmonth.setItems([" ","January","February","March","April","May","June","July","August","September","October","November","December"]); 
					var myArray = ["",];
					var dte;
					dte = new Date();
					for (var i=0,  tot=4; i <= tot; i++) {						   
						myArray.push(dte.getFullYear() + i);
					}
					c_targetyear.setItems(myArray); 
					c_targetyear.value = "";
					c_tax_loss.value = " ";
					c_amt.value = " ";
					c_ladder_strategy.setItems([" ",
												"National",
												"CA - State Preference",
												"NY - State Preference"]); 					
					
					c_ladder_strategy.value = " "; 
					c_ladder_benchmark.display = display.hidden;
					c_targetmonth.display = display.visible;
					c_targetday.display = display.visible;
					c_targetyear.display = display.visible;
					c_targetmat_lbl.display = display.visible;
					if (c_strategy.value == municipalTaxExemptLadder)
					{ c_benchmark.value = "Short: Average Maturity < 5.5 yrs";
					c_benchmark.readonly = true
						}
					else
					{c_benchmark.value = "Short: Average Maturity < 3 yrs";
					c_benchmark.readonly = true
						} 
					c_esg.value = " ";
					//c_maturity_management.value = " ";
				break;
				
				default:
					c_ladder_benchmark.setItems([" "]); 
					c_ladder_strategy.setItems([" ","National","AZ - State Preference","CA - State Specific","CA - State Preference","CO - State Preference","CT - State Preference","FL - Best Efforts","GA - State Preference","HI - Best Efforts","IN - Best Efforts","KY - Best Efforts","LA - Best Efforts","MA - State Specific","MA - State Preference","MD - State Preference","MI - State Specific","MI - State Preference","MN - State Specific","MN - State Preference","M0 - State Preference","NC - State Preference","NJ - State Specific","NJ - State Preference","NY - State Specific","NY - State Preference","OH - State Specific","OH - State Preference","OR - State Preference","PA - State Specific","PA - State Preference","SC - Best Efforts","TN - Best Efforts","TX - State Specific","TX - State Preference","UT - State Specific","UT - State Preference","VA - State Preference"]);
					c_ladder_benchmark.display = display.visible;
					c_targetmonth.display = display.hidden;
					c_targetday.display = display.hidden;
					c_targetyear.display = display.hidden;
					c_targetmat_lbl.display = display.hidden;
					c_tax_loss.value = " ";
					c_amt.value = " ";
					break;            	
				}
			if (val == ""|| val == " ")
			{
				g_autoset_variable = "Yes";
				c_transfer.setItems([" "]);
				g_autoset_variable = "Yes";
				c_purchased.setItems([" "]);
				}
			
				g_autoset_variable = "Yes";
				c_transfer.setItems([" ", 
										 "Not Applicable: Funded with Cash", 
										 "Transition to Selected Strategy and/or Maturity Range (standard)", 
										 "Turnover with Relative Value Trading to Maintain Selected Maturity Range",
										 "No Turnover/Hold All to Maturity and Reinvest Proceeds in Maturity Range Selected", 
										 "Hold Specific Securities to Maturity/List cusips and par amounts not to sell on the next page",
										 "No Turnover for Maturities Shorter than Starting Ladder Maturity",
										 "No Turnover for Maturities Longer than Starting Ladder Maturity",
										 "No Turnover for Maturities Shorter than Ending Ladder Maturity",
										 "No Turnover for Maturities Longer than Ending Ladder Maturity"
										 ]); 
				g_autoset_variable = "Yes";
				c_purchased.setItems([" ",
									"Transition to Selected Strategy and/or Maturity Range (standard)",
									"No Turnover/Hold All to Maturity and Reinvest Proceeds in Maturity Range Selected",
									"Turnover with Relative Value Trading to Maintain Selected Maturity Range"]); 			
			
			c_transfer.display = display.visible;
			c_purchased.display = display.visible;
			c_summary.display = display.visible;					
			c_important_notes.display = display.visible;			
					
			break;			
		
		case "Set Target Day":
			var myArray = ["",];
			var dte = new Date();
			var month;
			month = 'January___February__March_____April_____May_______June______July______August____September_October___November__December__'.indexOf(val) / 10 + 1
			var daysInMonth = new Date(c_targetyear.value, month, 0).getDate();
			
			for (var i=1,  tot=daysInMonth; i <= tot; i++) {						   
				myArray.push(i);
			}
			c_targetday.setItems(myArray); 
			c_targetday.value= "";
			break;
		
		case "Set Ladder Benchmark":
			switch(val){
				case "Custom Maturity Ladder":
					c_start_month.setItems(["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"
]); 
					c_start_year.setItems(["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]); 
					c_start_month.readonly  = false;
					c_end_month.readonly  = false;		
					c_start_year.readonly  = false;
					c_end_year.readonly  = false;	
					c_vrdn_note.display = display.hidden;
					if (g_ladder_type_value == "Standard Ladder")
					{
						c_start_month_label.display = display.hidden;
						c_end_month_label.display = display.hidden;	
						c_start_month.display  = display.hidden;
						c_end_month.display  = display.hidden;	
						c_start_year_label.display = display.visible;
						c_end_year_label.display = display.visible;	
						c_start_year.display  = display.visible;
						c_end_year.display  = display.visible;						
					}
					else
				   if(g_ladder_type_value == "Ultra-Short Maturity")
				   {
						c_start_year_label.display = display.hidden;
						c_end_year_label.display = display.hidden;	
						c_start_year.display  = display.hidden;
						c_end_year.display  = display.hidden;	
						c_start_month_label.display = display.visible;
						c_end_month_label.display = display.visible;	
						c_start_month.display  = display.visible;
						c_end_month.display  = display.visible;	
						if (c_strategy.value == municipalTaxExemptLadder){
						c_frn_label.display = display.visible;
						c_frn.display = display.visible;
						c_frn.value = " ";
						c_frn.readonly = false}
					}
					else
					{
						c_frn_label.display = display.hidden;
						c_frn.display = display.hidden;
						c_start_year_label.display = display.hidden;
						c_end_year_label.display = display.hidden;	
						c_start_year.display  = display.hidden;
						c_end_year.display  = display.hidden;	
						c_start_month_label.display = display.visible;
						c_end_month_label.display = display.visible;	
						c_start_month.display  = display.visible;
						c_end_month.display  = display.visible;	
					}
					break;	
				case "1-12 Months Ladder":
					c_start_month.setItems(["1"]);
					c_end_month.setItems(["12"]);
					c_start_month.value = "1";
					c_end_month.value = "12";
					c_start_month.display  = display.hidden;
					c_end_month.display  = display.hidden;
					c_start_month_label.display = display.hidden;
					c_end_month_label.display = display.hidden;	
					c_vrdn_note.display = display.hidden;
					if (c_strategy.value == municipalTaxExemptLadder){
					c_frn_label.display = display.visible;
					c_frn.display = display.visible;
					c_frn.value = " ";
					c_frn.readonly = false}
					break;
				case "1-24 Months Ladder":
					c_start_month.setItems(["1"]);
					c_end_month.setItems(["24"]);
					c_start_month.value = "1";
					c_end_month.value = "24";
					c_start_month.display  = display.hidden;
					c_end_month.display  = display.hidden;
					c_start_month_label.display = display.hidden;
					c_end_month_label.display = display.hidden;	
					c_vrdn_note.display = display.hidden;
					if (c_strategy.value == municipalTaxExemptLadder){
					c_frn_label.display = display.visible;
					c_frn.display = display.visible;
					c_frn.value = " ";
					c_frn.readonly = false}
					
				break;	
				case "1-36 Months Ladder":
					c_start_month.setItems(["1"]);
					c_end_month.setItems(["36"]);
					c_start_month.value = "1";
					c_end_month.value = "36";			
					c_start_month.display  = display.hidden;
					c_end_month.display  = display.hidden;	
					c_start_month_label.display = display.hidden;
					c_end_month_label.display = display.hidden;		
					c_vrdn_note.display = display.hidden;
					if (c_strategy.value == municipalTaxExemptLadder){
					c_frn_label.display = display.visible;
					c_frn.display = display.visible;
					c_frn.value = " ";
					c_frn.readonly = false}
					break;
				case "VRDNs":
					c_start_month.setItems([""]);
					c_start_month.readonly  = true;
					c_end_month.readonly  = true;	
					c_start_year.readonly  = true;
					c_end_year.readonly  = true;							
					c_start_month.display  = display.hidden;
					c_end_month.display  = display.hidden;
					c_start_month_label.display = display.hidden;
					c_end_month_label.display = display.hidden;	
					c_start_year_label.display = display.hidden;
					c_end_year_label.display = display.hidden;	
					c_start_year.display  = display.hidden;
					c_end_year.display  = display.hidden;				
					c_vrdn_note.display = display.visible;
					c_frn_label.display = display.hidden;
					c_frn.display = display.hidden;
					c_frn.value = " "
					break;
				case "VRDNs & FRNs: (max 50%)":
					c_start_month.setItems([""]);
					c_start_month.readonly  = true;
					c_end_month.readonly  = true;	
					c_start_year.readonly  = true;
					c_end_year.readonly  = true;							
					c_start_month.display  = display.hidden;
					c_end_month.display  = display.hidden;
					c_start_month_label.display = display.hidden;
					c_end_month_label.display = display.hidden;	
					c_start_year_label.display = display.hidden;
					c_end_year_label.display = display.hidden;	
					c_start_year.display  = display.hidden;
					c_end_year.display  = display.hidden;				
					c_vrdn_note.display = display.visible;
					c_frn_label.display = display.hidden;
					c_frn.display = display.hidden;
					c_frn.value = " "
					break;
				default:
					c_start_month.setItems([""]);
					c_start_month.readonly  = true;
					c_end_month.readonly  = true;	
					c_start_year.readonly  = true;
					c_end_year.readonly  = true;							
					c_start_month.display  = display.hidden;
					c_end_month.display  = display.hidden;
					c_start_month_label.display = display.hidden;
					c_end_month_label.display = display.hidden;	
					c_start_year_label.display = display.hidden;
					c_end_year_label.display = display.hidden;	
					c_start_year.display  = display.hidden;
					c_end_year.display  = display.hidden;				
					c_ladder_benchmark.display = display.visible;
					c_vrdn_note.display = display.hidden;
					c_frn_label.display = display.hidden;
					c_frn.display = display.hidden;
					c_frn.value = " "
					if (c_ladder_strategy.value == "" || c_ladder_strategy.value == " " )					
						c_muni_qual.setItems([" "," "]); 					
					break;            	
				}			
			break;
		
        case "Set Ladder Strategy":
			switch(val){
					case "National":
						if (g_strategy == municipalTaxExemptLadder) {
							if (g_ladder_type_value != " ") {
								if (c_esg_global != "Yes") {
									if (g_ladder_type_value == "Target Maturity Date" || g_ladder_type_value == "Ultra-Short Maturity") {
										c_muni_qual.setItems([" ", "AA-/SP-1", "A-/SP-2", "BBB/SP-2"]);  
										c_muni_qual.value = " ";
									} else {
										c_muni_qual.setItems([" ", "AA-", "A-", "BBB"]);  
										c_muni_qual.value = " ";
									}	
								} else {
									if (g_ladder_type_value == "Target Maturity Date" || g_ladder_type_value == "Ultra-Short Maturity") {
										c_muni_qual.setItems(["A-/SP-2"]);  
										c_muni_qual.value = "A-/SP-2";
									}
								}
							}	
						} else if (g_strategy == municipalTaxableLadder) {
							c_muni_qual.setItems([" ", "AA-", "A-", "BBB"]);  
							c_muni_qual.value = " ";	
						}
					break;				
					case " ":
						c_muni_qual.setItems([" "," "]); 
						c_muni_qual.value = " ";					
						break;	
					case "State Specific:":
												c_muni_qual.setItems([" "," "]); 
						c_muni_qual.value = " ";					
						break;
					case " ":
												c_muni_qual.setItems([" "," "]); 
						c_muni_qual.value = " ";					
						break;	
						
					case "State Preference:":
												c_muni_qual.setItems([" "," "]); 
						c_muni_qual.value = " ";					
						break;
					case "State Best Efforts:":
												c_muni_qual.setItems([" "," "]); 
						c_muni_qual.value = " ";					
						break;					
					default:
						caseStateCreditQual();
					
						break;            	
					}
			break;
		case "Set Tax Loss":
			switch(val){
							
					case "Yes":
						if (c_transfer.value !="Not Applicable: Funded with Cash" && c_transfer.value != " ")
						{
							c_link.display = display.visible	
								}
						else 
							{
							c_link.display = display.hidden	
								}
						break;	
						
					default:
						c_link.display = display.hidden
						break;            	
					}
		
			break;	
		case "Ladder Start Month":
		   val = parseFloat(val);
		   var tmpArray = ["", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
		   var myArray = [""];
		   
           for (var i=0,  tot=tmpArray.length; i < tot; i++) {
				   if (tmpArray[i] > val && val < 37 )	  
						myArray.push(tmpArray[i]);
				}
		   c_end_month.setItems(myArray);                 
		   break;	
		   
        case "Ladder Start Year":
		val = parseFloat(val);
		var myArray = [""];
		var max = 0;
		if (g_ladder_type_value == "Standard Ladder" &&  (g_strategy == municipalTaxExemptLadder || g_strategy == municipalTaxableLadder)) 
		{
			max = 20;
		}
		else if (g_ladder_type_value == "Standard Ladder" &&  c_strategy.value == corporateLadder)  
		{
			max = 10;
		}
		else
		{
			max = 20; //safety condition, but probably shouldn't hit this anyway
		}
		for (var i = val + 1; i <= max; i++) {
			myArray.push(i);
		}
		c_end_year.setItems(myArray);   

		   break;

		

		
	} 

	function getAllStrategiesArray() {
		return [" ","National","AZ - State Preference","CA - State Specific","CA - State Preference","CO - State Preference","CT - State Preference","FL - Best Efforts","GA - State Preference","HI - Best Efforts","IN - Best Efforts","KY - Best Efforts","LA - Best Efforts","MA - State Specific","MA - State Preference","MD - State Preference","MI - State Specific","MI - State Preference","MN - State Specific","MN - State Preference","M0 - State Preference","NC - State Preference","NJ - State Specific","NJ - State Preference","NY - State Specific","NY - State Preference","OH - State Specific","OH - State Preference","OR - State Preference","PA - State Specific","PA - State Preference","SC - Best Efforts","TN - Best Efforts","TX - State Specific","TX - State Preference","UT - State Specific","UT - State Preference","VA - State Preference"];
	}

	function caseStateCreditQual() {
		if (g_ladder_type_value == "Standard") {
			c_muni_qual.setItems(["A-"]);
			c_muni_qual.value = "A-";
		} else {
			// Must check if ESG and Target Maturity Date is selected
			if (c_esg.value != "Yes") {
				if (c_strategy.value == municipalTaxExemptLadder) {
					if (g_ladder_type_value == "Target Maturity Date" || g_ladder_type_value == "Ultra-Short Maturity") {
						c_muni_qual.setItems(["A-/SP-2"]);
						c_muni_qual.value = "A-/SP-2";
					} else {
						c_muni_qual.setItems(["A-"]);
						c_muni_qual.value = "A-";
					}
				} else if (c_strategy.value == municipalTaxableLadder) {
					c_muni_qual.setItems([" ", "AA-", "A-", "BBB"]);
					c_muni_qual.value = " ";
				} else {
					c_muni_qual.setItems([" "]);
					c_muni_qual.value = " ";
				}
			} else {
				if (g_ladder_type_value == "Target Maturity Date" || g_ladder_type_value == "Ultra-Short Maturity") {
					c_muni_qual.setItems(["A-/SP-2"]);
					c_muni_qual.value = "A-/SP-2";
				} else {
					c_muni_qual.setItems(["A-"]);
					c_muni_qual.value = "A-";
				}
			}	
		}				
	}
	/*
	* Description: Adds and removes Cusip page regarding the Turnover options.  
	* @Param: val = Turnover option, _t_pg = Total number of pages before Cusip is inserted
	*/
	function addCusip(val, _t_pg) {

		//Check wheter the Cusip page has been spawned before asigning the total number of pages
		if (!cusipSpawned)
			_t_pg = this.numPages;
		
		if (val == "Hold Specific Securities to Maturity/List cusips and par amounts not to sell on the next page") {
			var a = this.templates;
			for (i = 0; i < a.length; i++) {
				if(a[i].name == sName1) {
					a[i].spawn(g_cusipPage, false, false);							
				}
			}
			
			cusipSpawned = true;
			var _t_pg = 0;
			/* if (c_strategy.value == municipalTaxExemptLadder || c_strategy.value == "Municipal Ladder - Taxable") {
				_t_pg = 20;
			} else if (c_strategy.value == "Corporate Ladder" || c_strategy.value == "Calvert ESG Corporate Ladder") {
				_t_pg = 17;
			} */

			var txtName = "Cusips-" + (this.numPages - _t_pg);
			var g = this.getField(txtName);

			if (g != null) {
				this.removeField(g);
			} 
					
			
			var pgRect = this.getPageBox("Crop", g_cusipPage);
			// Build Rectangle in lower left corner of page
			var fldRect = []; 
			fldRect [0] = pgRect[0] + 36;
				// 36 points from left side
			fldRect [1] = pgRect[0] + 590;
				// 590 points high
			fldRect [2] = pgRect[0] + 300;
				// 300 points wide
			fldRect [3] = pgRect[0] + 45;
				// 45 points from bottom
			var f=this.addField(txtName, "text", g_cusipPage, fldRect);
			f.delay=true;
			f.multiline=true;					
			f.delay=false;
			
		}
		else {
			//If another thurnover option is selected remove all the CUSIPs templates
			if (this.numPages > _t_pg) {
				var pageDifference = this.numPages - _t_pg;
				for (var i = 0; i < pageDifference; i++) {
					this.deletePages(g_cusipPage);
				}
			}		
			cusipSpawned = false;
		}
	}

	
} 

/* 
* Implementation of Bubble Sort, used for sorting the template pages given that the Acrobat sorting functionality
* does not properly work with the template's names (Strings)
*/
function bubbleSort(array)
{
    var swapp;
    var n = array.length-1;
    var x=array;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {	
			//Sort in ascending order
			//Get the las number characters of the Template's name and parse it to number
            if (parseInt(x[i].name.slice(12)) > parseInt(x[i+1].name.slice(12)))
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

function ShowHideAppendix(val) 
{
	var a = this.templates;
	
	var arrMuniPages = []; //Used for finding Appendix C
	var arrCorpPages = [];
	var minPages = 11;	

	for (var i = 0; i < a.length; i++) {
		if(a[i].name.toLowerCase().indexOf("muni") !== -1) {
			arrMuniPages.push(a[i]);
		}
	}
	
	//Sort Municipal Pages
	arrMuniPages = bubbleSort(arrMuniPages);
	var appendixC = arrMuniPages[arrMuniPages.length - 1];

	if (val == corporateLadder) {
		while (this.numPages > minPages)
        {
			this.deletePages(minPages);
        }
		
	 	// show corporate, hide municipal
		for (var i = 0; i < a.length; i++) {
			//Spawn the templates that contain the string 'corp' in their names
			if(a[i].name.toLowerCase().indexOf("corp") !== -1) {
				arrCorpPages.push(a[i]);
			}
		}
		arrCorpPages = bubbleSort(arrCorpPages);

		for (var i = 0; i < arrCorpPages.length; i ++) {
			arrCorpPages[i].spawn(this.numPages, false, false);
		}
	}
	else if (val == municipalTaxExemptLadder || val == municipalTaxableLadder) {
		// show municipal, hide corporate
		while (this.numPages > minPages)
        {
			this.deletePages(minPages);
        }
		for (var i = 0; i < arrMuniPages.length; i++) {	
			arrMuniPages[i].spawn(this.numPages, false, false);
		}
		
	}
	else {
		while (this.numPages > minPages)
        {
			this.deletePages(minPages);
        }

		// Find Appendix C
        // given a requirement to always show Appendix C even if no other selections are made
		for (var i = 0; i < a.length; i++) {
			if(a[i].name == appendixC.name) {
				a[i].spawn(this.numPages, false, false);
			}
		}
	}
}



//</ACRO_script>
//</Document-Level>

//<AcroForm>
//<ACRO_source>Add page:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Add page:Annot1:MouseUp:Action1 ***********/


var c_strategy = this.getField("Strategy");
var sName1 = "Cusip Template";
var c_transfer_muni = this.getField("Transfer To EVM");
if (c_transfer_muni.value == "Hold Specific Securities to Maturity/List cusips and par amounts not to sell on the next page") {
var a = this.templates;
var numMuniPages = 0;
var numCorpPages = 0;

//Count the number Muni or Corp templates visible
for(i = 0; i < a.length; i ++) {
	//Check which string is in included in the Cusip template's name
	if (a[i].name.toLowerCase().indexOf("muni") != -1)
		numMuniPages ++;
	else if (a[i].name.toLowerCase().indexOf("corp") != -1) 
		numCorpPages ++;
}

//Insert the cusip page in the corresponding position
if (c_strategy.value == corporateLadder || c_strategy.value == "Calvert ESG Corporate Ladder") {
	
	for (i = 0; i < a.length; i++) {
		if(a[i].name == sName1)
			a[i].spawn((this.numPages - numCorpPages), false, false);							
	}

	var new_pg_num = this.numPages - numCorpPages - 1;
}
else if (c_strategy.value == municipalTaxExemptLadder || c_strategy.value == municipalTaxableLadder) {
	for (i = 0; i < a.length; i++) {
		if(a[i].name == sName1) {
			a[i].spawn((this.numPages - numMuniPages), false, false);							
		}
	}

	var new_pg_num = this.numPages - numMuniPages - 1;	
}

var txtName="Cusips-" + new_pg_num;
var g=this.getField(txtName);
if ( g!=null ) 
	this.removeField(txtName);
var pgRect = this.getPageBox("Crop", new_pg_num);
// Build Rectangle in lower left corner of page
var fldRect = []; 
fldRect [0] = pgRect[0] + 36;
// 36 points from left side
fldRect [1] = pgRect[0] + 590;
// 550 points high
fldRect [2] = pgRect[0] + 300;
// 300 points wide
fldRect [3] = pgRect[0] + 36;
// 36 points from bottom
var f=this.addField(txtName, "text", new_pg_num, fldRect);
f.delay=true;
f.multiline=true;					
f.delay=false;


// Acquire the crop box (visible area) for the current page
	var pgRect = this.getPageBox("Crop", new_pg_num);
	// Build Button Rectangle in lower left corner of page
	var fldRect = []; 
	fldRect [0] = pgRect[0] + 65;
	// 65 points from left side
	fldRect [1] = pgRect[0] + 755;
	// 25 points high
	fldRect [2] = pgRect[0] + 210;
	// 135 points wide
	fldRect [3] = pgRect[0] + 780;
	// 780 points from bottom
	// Create Button on page
	var oFld = this.addField( "Delete-" + new_pg_num , "button", new_pg_num, fldRect);
	// Setup Button's Properties
	if(oFld != null) {
		oFld.buttonSetCaption("Delete this page");
		oFld.borderStyle = border.b;
		// Beveled edges
		oFld.strokeColor = color.black;
		// Border Color
		oFld.textColor = color.black; 
		oFld.lineWidth = 1;
		// Thin Border
		oFld.setAction("MouseUp", "this.deletePages(this.pageNum, this.pageNum) ;");
		// Navigation
	}	
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Benchmark:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Benchmark:Keystroke ***********/


if( event.willCommit ) { 
		SetFieldValues("Set Benchmark Check", event.value); 
}



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Create branding:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Create branding:Annot1:MouseUp:Action1 ***********/




var c_firm = this.getField("Firm");
var c_sponsor = this.getField("Sponsor");
var c_assets = this.getField("Assets");
var c_fee = this.getField("Fee");
var c_firm_in = this.getField("Firm-In");
var c_sponsor_in = this.getField("Sponsor-In");
var c_assets_in = this.getField("Assets-In");
var c_fee_in = this.getField("Fee-In");
var c_brand_label = this.getField("Branding Label");
var c_assets_label = this.getField("Assets_lbl");
var c_firm_label = this.getField("Firm_lbl");
var c_sponsor_label = this.getField("Sponsor_lbl");
var c_fee_label = this.getField("Fee_lbl");
var b_brand = this.getField("Create branding");
c_firm.value = c_firm_in.value;
c_sponsor.value = c_sponsor_in.value;
c_assets.value = c_assets_in.value;
c_fee.value = c_fee_in.value;
c_firm.display = display.visible;
c_assets_in.display = display.hidden;
c_fee_in.display = display.hidden;
c_firm_in.display = display.hidden;
c_sponsor_in.display = display.hidden;
b_brand.display = display.hidden;
c_brand_label.display = display.hidden;
c_assets_label.display = display.hidden;
c_firm_label.display = display.hidden;
c_sponsor_label.display = display.hidden;
c_fee_label.display = display.hidden;





//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ESG:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ESG:Keystroke ***********/
if( event.willCommit ) { 
		SetFieldValues("Set ESG", event.value); 
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ESG Additional Options:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ESG Additional Options:Keystroke ***********/
if( event.willCommit ) { 
		SetFieldValues("Set ESG Additional", event.value); 
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Ending Maturity Month:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Ending Maturity Month:Keystroke ***********/


if( event.willCommit ) { 
    if(event.value != "") 
		SetFieldValues("End Maturity Month",event.value); 
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Ending Maturity Month:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Ending Maturity Month:Validate ***********/

event.rc = true;
if (event.value < this.getField("Starting Maturity Month").value && this.getField("Starting Maturity Month").value > 0 && event.value > 0)
{
    app.alert("Ending Maturity can't be less than Starting Maturity! Please revise your selection!");
    event.value = this.getField("Starting Maturity Month").value + 1
    event.rc = false;
    event.target.textColor = color.black;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Ending Maturity Year:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Ending Maturity Year:Keystroke ***********/



if( event.willCommit ) { 
    if(event.value != "") 
		SetFieldValues("End Maturity Year",event.value); 
}



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Ending Maturity Year:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Ending Maturity Year:Validate ***********/


event.rc = true;
if (event.value < this.getField("Starting Maturity Year").value && this.getField("Starting Maturity Year").value > 0 && event.value > 0)
{
    app.alert("Ending Maturity can't be less than Starting Maturity! Please revise your selection.");
    event.value = this.getField("Starting Maturity Year").value + 1
    event.rc = false;
    event.target.textColor = color.black;
}



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Ladder Benchmark:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Ladder Benchmark:Keystroke ***********/

if( event.willCommit ) { 
		SetFieldValues("Set Ladder Benchmark", event.value); 
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Ladder Strategy:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Ladder Strategy:Keystroke ***********/

if( event.willCommit ) { 
		SetFieldValues("Set Ladder Strategy",event.value); 
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Ladder Type:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Ladder Type:Keystroke ***********/

if( event.willCommit ) { 
		SetFieldValues("Set Ladder Type", event.value); 
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ManagerDiscretion:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ManagerDiscretion:Annot1:MouseUp:Action1 ***********/
SetFieldValues("Set Manager Discretion", "Yes"); 


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ManagerDiscretion:Annot2:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ManagerDiscretion:Annot2:MouseUp:Action1 ***********/
SetFieldValues("Set Manager Discretion", "No"); 


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Purchased By EVM:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Purchased By EVM:Keystroke ***********/
if( event.willCommit ) { 
		SetFieldValues("Set Purchased ToolTip", event.value); 
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Starting Maturity Month:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Starting Maturity Month:Keystroke ***********/

if( event.willCommit ) { 
		SetFieldValues("Ladder Start Month", event.value); 
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Starting Maturity Month:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Starting Maturity Month:Validate ***********/


event.rc = true;
if (event.value > this.getField("Ending Maturity Month").value && this.getField("Ending Maturity Month").value > 0 && event.value > 0)
{
    app.alert("Ending Maturity can't be less than Starting Maturity! Please revise your selection!");
    //event.value = this.getField("Ending Maturity Month").value - 1
    event.rc = false;
    event.target.textColor = color.black;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Starting Maturity Year:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Starting Maturity Year:Keystroke ***********/

if( event.willCommit ) { 
		SetFieldValues("Ladder Start Year", event.value); 
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Starting Maturity Year:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Starting Maturity Year:Validate ***********/


event.rc = true;
if (event.value > this.getField("Ending Maturity Year").value && this.getField("Ending Maturity Year").value > 0 && event.value > 0)
{
    app.alert("Ending Maturity can't be less than Starting Maturity! Please revise your selection!");
    //event.value = this.getField("Ending Maturity Year").value - 1
    event.rc = false;
    event.target.textColor = color.black;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Strategy:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Strategy:Keystroke ***********/

if( event.willCommit ) { 
		SetFieldValues("Set Strategy", event.value); 
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Summary:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Summary:Calculate ***********/

var c_ladder_type = this.getField("Ladder Type");
var c_start_month = this.getField("Starting Maturity Month");
var c_start_year = this.getField("Starting Maturity Year");
var c_end_month = this.getField("Ending Maturity Month");
var c_end_year = this.getField("Ending Maturity Year");
var c_muni_qual = this.getField("Muni Credit Quality");
var c_corp_qual = this.getField("Corp Credit Quality");
var c_ladder_strategy = this.getField("Ladder Strategy");
var c_ladder_benchmark = this.getField("Ladder Benchmark");
var c_transfer = this.getField("Transfer To EVM");
var c_purchased = this.getField("Purchased By EVM");
var c_strategy = this.getField("Strategy");
//var c_maturity_management = this.getField("Maturity Management");


var strategy = ""; 
var frn_option = "";
var credit_min = ""; 
var ladder_type = "";
var ladder_strategy = "";
var target_maturity = "";
var c_target_month = this.getField("Target_Month");
var c_target_day = this.getField("Target_Day");
var c_target_year = this.getField("Target_Year");
var c_frn = this.getField("FRN Ans");
var c_tax_loss = this.getField("Tax loss");
var c_amt = this.getField("AMT");
var c_esg = this.getField("ESG");
var c_manual_notes_button = this.getField("Manual Notes Button");
var c_manual_notes_box = this.getField("Manual Notes Box");
var c_esg_add_options = this.getField("ESG Additional Options");
var c_manual_notes_box = this.getField("Manual Notes Box");

ladder_type = c_ladder_type.value;		
var exit = "false";
var dte;
dte = new Date();
var myArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]

if(c_target_month.value != "" && c_target_year.value != "" && ladder_type  == "Target Maturity Date")
	target_maturity = c_target_month.value + " " + c_target_day.value + ", " + c_target_year.value;

if (c_target_year.value == dte.getFullYear() && ladder_type == "Target Maturity Date")
{
    if (myArray.indexOf(c_target_month.value)-1 < dte.getMonth())
        {
            event.value = "Please select a valid Target Date greater than the current month/year!"
            exit = "true";
        }
}

if (exit == "false")    
{
	var optionsArray = [];
	optionsArray.push(c_strategy.value);
	optionsArray.push(c_transfer.value);
	optionsArray.push(c_purchased.value);
	//optionsArray.push(c_maturity_management.value);
	optionsArray.push(c_tax_loss.value);

	var amtString = " | " + "AMT Bonds: " + c_amt.value;
	var frnString = " | " + "FRNs: " + c_frn.value;
 	if (c_strategy.value == corporateLadder && c_esg.value == "Yes") 
		var esgString = " | " + " ESG: " + c_esg_add_options.value;
	else
		var esgString = " | " + " ESG: " + c_esg.value;
	

	switch(c_strategy.value) {
				
		case municipalTaxExemptLadder:
			//Display corresponding missing options message
			if (c_ladder_type.value == "Ultra-Short Maturity" && c_ladder_benchmark.value != "VRDNs & FRNs: (max 50%)" 
				&& c_ladder_benchmark.value != "VRDNs" && c_ladder_benchmark.value != " " && c_frn.value == " ")
				event.value = "Please select valid options for Tax Loss Harvesting, AMT bonds, ESG and FRNs.";
			else if (c_amt.value == " " || c_tax_loss.value == " " || c_esg.value == " ") {
				event.value = "Please select valid options for Tax Loss Harvesting, AMT bonds and ESG.";
			} else {
				optionsArray.push(c_ladder_strategy.value);
				credit_min = c_muni_qual.value;
				optionsArray.push(credit_min);
				ladder_strategy = " | " + c_ladder_strategy.value;
				fillEventValue(optionsArray, amtString, esgString, frnString, credit_min, ladder_strategy);	
			}
				
		break;

		case municipalTaxableLadder:
			if (c_tax_loss.value == " ")
				event.value = "Please select valid options for Tax Loss Harvesting.";
			else {
				optionsArray.push(c_ladder_strategy.value);
				amtString = " ";
				esgString = " ";
				frnString = " ";
				credit_min = c_muni_qual.value;
				optionsArray.push(credit_min);
				ladder_strategy = " | " + c_ladder_strategy.value;
				fillEventValue(optionsArray, amtString, esgString, frnString, credit_min, ladder_strategy);	
			}
		break;
		
		case corporateLadder:
			if (c_tax_loss.value == " " || (c_esg_add_options.value == " " && c_esg.value == "Yes") || c_esg.value == " ") 
				event.value = "Please select valid options for Tax Loss Harvesting and ESG."
			else {
				frnString = " ";
				amtString = " ";
				credit_min = c_corp_qual.value;
				optionsArray.push(credit_min);
				ladder_strategy = ""; 
				fillEventValue(optionsArray, amtString, esgString, frnString, credit_min, ladder_strategy);	
			}
	
		break;

		default:
			event.value = "";
			break;
		}				
}					

function isEmpty(optionsArray) {
	var empty = false;
	optionsArray.forEach(option => {
		if (option == " " || option == "") 
			empty = true;
	});
	return empty;
}

function fillEventValue(optionsArray, amtString, esgString, frnString, credit_min, ladder_strategy) {

	var maturityString = " ";
	var rateString = " ";
	var benchmarkString = " ";
	var invPeriodString = " ";

	var summaryEmpty = false;
	switch (c_ladder_type.value) {
							
 		case "Target Maturity Date":
			optionsArray.push(target_maturity);
			frnString = " ";
			if (isEmpty(optionsArray)) {
				event.value = " ";
				summaryEmpty = true;
			} else {
				maturityString = ": " + target_maturity;
			}
		break;

		case "Ultra-Short Maturity":
			if (c_ladder_benchmark.value == "VRDNs & FRNs: (max 50%)" || c_ladder_benchmark.value == "VRDNs") {
				optionsArray.push(c_ladder_benchmark.value);
			} else {
				optionsArray.push(c_start_month.value);
				optionsArray.push(c_end_month.value);
			}
			if (isEmpty(optionsArray)) {
				event.value = " ";
				summaryEmpty = true;
			} else {
				if (c_ladder_benchmark.value == "VRDNs & FRNs: (max 50%)" || c_ladder_benchmark.value == "VRDNs") {
					frnString = " ";
					benchmarkString = " | Ladder: " + c_ladder_benchmark.value;
				}
				else {
					benchmarkString = " | Ladder: " + c_start_month.value + " to " + c_end_month.value + " Months";
				}
			}
		break; 

		case "Standard Ladder":
			optionsArray.push(c_start_year.value);
			optionsArray.push(c_end_year.value);
			frnString = " ";
			if (isEmpty(optionsArray)) {
				event.value = " ";
				summaryEmpty = true;
			} else 
				benchmarkString = " | Ladder: " + c_start_year.value + " to " + c_end_year.value + " Years";
		break;

		/* case "Variable Rate":
			optionsArray.push(c_rate_type.value);
			if (isEmpty(optionsArray)) {
				event.value = " ";
				summaryEmpty = true;
			} else 
				rateString = " " + c_rate_type.value;
		break; */

		default:
			summaryEmpty = true;
			event.value = " ";
		break;
	}

	if (!summaryEmpty) {
		event.value = c_strategy.value + maturityString + ladder_strategy + rateString + invPeriodString + "\u2028"
		+ "Credit Min: " + credit_min + benchmarkString + "\u2028" 
		+ "Bonds Transferred into this Strategy: " + c_transfer.value + "\u2028" 
		+ "Bonds Purchased for this Strategy: " + c_purchased.value + "\u2028" 
		//+ "Maturity Management: " + c_maturity_management.value + "\u2028"
		+ "Tax Loss Harvesting: " + c_tax_loss.value + amtString + esgString + frnString;
		
		if (c_manual_notes_box.value != "") {
			event.value = event.value + "\u2028" + c_manual_notes_box.value;
		}
	}
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Target_Month:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Target_Month:Keystroke ***********/
if( event.willCommit ) { 
    if(event.value != "") 
		SetFieldValues("Set Target Day",event.value); 
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Tax loss:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Tax loss:Keystroke ***********/

if( event.willCommit ) { 
		SetFieldValues("Set Tax Loss", event.value); 
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Transfer To EVM:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Transfer To EVM:Keystroke ***********/

if( event.willCommit ) { 
		SetFieldValues("Set Transfer ToolTip", event.value); 
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Transfer To EVM:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Transfer To EVM:Validate ***********/

//</ACRO_script>
//</AcroForm>


