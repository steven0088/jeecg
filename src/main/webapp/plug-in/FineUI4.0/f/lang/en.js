(function(n){$.extend(n.TabStrip.prototype,{closeTabText:"Close Tab",closeOtherTabsText:"Close Other Tabs",closeAllTabsText:"Close All Tabs"});$.extend(n.MessageBox.prototype,{buttonText:{ok:"OK",yes:"Yes",no:"NO",cancel:"Cancel"}});$.extend(n.Grid.prototype,{sortASCText:"Sort Ascending",sortDESCText:"Sort Descending",columnsText:"Columns",unlockText:"Unlock",lockText:"Lock",filtersText:"Filters",filtersCancelText:"Cancel Filters",filterOKText:"OK",filterCancelText:"Cancel",filterMatchAll:"Match All",filterMatchAny:"Match Any"});$.extend(n.PagingToolbar.prototype,{beforeText:"Page",afterText:"of {0}",firstText:"First Page",prevText:"Previous Page",nextText:"Next Page",lastText:"Last Page",displayMsg:"Displaying {0} - {1} of {2}",emptyMsg:"No data to display"});$.extend(n.TextBox.prototype,{minLengthText:"The minimum length for this field is {0}",maxLengthText:"The maximum length for this field is {0}",requiredText:"This field is required"});$.extend(n.NumberBox.prototype,{minText:"The minimum value for this field is {0}",maxText:"The maximum value for this field is {0}",nanText:"{0} is not a valid number",negativeText:"The value cannot be negative"});$.extend(n.CheckBoxList.prototype,{requiredText:"You must select at least one item"});$.extend(n.FileUpload.prototype,{buttonText:"Browse..."});$.extend(n.DatePicker.prototype,{minText:"The date in this field must be after {0}",maxText:"The date in this field must be before {0}",invalidText:"{0} is not a valid date - it must be in the format {1}"});$.extend(n.ajax,{errorMsg:"Error! {0} ({1})",timeoutErrorMsg:"Request timeout, please refresh the page and try again!",networkErrorMsg:"Network error, please refresh the page and try again!"});$.extend(n.util,{alertTitle:"Alert dialog",confirmTitle:"Confirm dialog",promptTitle:"Please enter value",notifyTitle:"Notify",formAlertTitle:"Form Invalid",loading:"Loading..."});$.extend(n.wnd,{closeButtonTooltip:"Close this window",formChangeConfirmMsg:"Current form has been modified, abandon changes?"});n.lang("calendar",{okText:"OK",closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"MM/dd/yyyy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",amPm:["am","pm"]})})(F)