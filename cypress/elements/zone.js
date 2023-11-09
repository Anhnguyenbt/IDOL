class zone {
  get zonetitle()             {return cy.get('[data-cy="form-title"]')}


  //Elements for viewing Zone form
  get view_Name()             { return cy.get('[data-cy="zone_nameid"]') }
  get view_Business()         { return cy.get('[data-cy="zone_biztype"]') }
  get view_Type()             { return cy.get('[data-cy="zone_type"]') }
  get view_Code()             { return cy.get('[data-cy="zone_code_val"]') }
  get view_Location()         { return cy.get('[data-cy="zone_locationcount_val"]') }
  get view_Inactivelocation() { return cy.get('[data-cy="zone_inactivelocation_val"]') }
  get view_Remark()           { return cy.get('[data-cy="zone_remark_val"]') }
  get view_Description()           { return cy.get('[data-cy="zone_desc_val"]') }  
  get view_Warehouse()        { return cy.get('[data-cy="staff_addr_val"]') }
  get view_Status()           { return cy.get('[data-cy="zone_status"]') }
  get view_Log()              { return cy.get('[data-cy="zone_viewlog_btn"]') }
  get view_Listbin()          { return cy.get('[data-cy="zone_listbin_btn"]') }
  get view_Edit()             { return cy.get('[data-cy="zone_edit_btn"]') }
  get view_Backtolist()       { return cy.get('[data-cy="zone_backlist_btn"]') }

  //Elements for Zone list

  get zoneaddnewbtn()             { return cy.get('[data-cy="zone_addnew_btn"]') }
  get zoneviewbtn()               { return cy.get('[data-cy="zone_view_link"]') }
  get zoneeditbtn()               { return cy.get('[data-cy="zone_edit_link"]') }
  get zoneimport()                { return cy.get('[data-cy="zone_import_btn"]') }
  get zonefilterbtn()             { return cy.get('[data-cy="filter_button"]') }
  get page_summary()              { return cy.get('[class="page_summary"]').eq(0) }
  get Actionlist_label()          {return cy.get('[data-cy="zone_act_header"]')}
  get IDlist_label()              {return cy.get('[data-cy="zone_id_header"]')}
  get Statuslist_label()          {return cy.get('[data-cy="zone_status_header"]')}
  get Bussinesslist_label()       {return cy.get('[data-cy="zone_biztype_header"]')}
  get Namelist_label()            {return cy.get('[data-cy="zone_name_header"]')}
  get Codelist_label()            {return cy.get('[data-cy="zone_code_header"]')}
  get Typelist_label()            {return cy.get('[data-cy="zone_type_header"]')}
  get Colorlist_label()           {return cy.get('[data-cy="zone_color_header"]')}
  get Locationlist_label()        {return cy.get('[data-cy="zone_location_header"]')}
  get InactiveLocationlist_label()            {return cy.get('[data-cy="zone_inactive_header"]')}
  get PrintCount()                            {return cy.get('[data-cy="zone_printc_header"]')}



  // Elements for creating new Zone form
  get BusinessType()        { return cy.get('[data-cy="zone_biztype_select"]') }
  get Name()                { return cy.get('[data-cy="zone_name_input"]') }
  get Code()                { return cy.get('[data-cy="zone_code_input"]') }
  get CheckCode()           { return cy.get('[data-cy="zone_checkcode_btn"]') }
  get Type()                { return cy.get('[data-cy="zone_type_select"]') }
  get Color()               { return cy.get('[data-cy="zone_color_input"]') }
  get Description()         { return cy.get('[data-cy="zone_desc_input"]') }
  get Remark()              { return cy.get('[data-cy="zone_remark_input"]') }
  get Status()              { return cy.get('[data-cy="zone_status_input"]').siblings() } 
  get saveBtn()             { return cy.get('[data-cy="zone_submit_btn"]') }
  get cancelBtn()           { return cy.get('[data-cy="zone_cancel_btn"]') }
  get BusinessType_label()  {return cy.get('[data-cy="zone_biztype_label"]')}
  get Name_label()          {return cy.get('[data-cy="zone_name_label"]')}
  get Code_label()          {return cy.get('[data-cy="zone_code_label"]')}
  get Type_label()          {return cy.get('[data-cy="zone_type_label"]')}
  get Color_label()         {return cy.get('[data-cy="zone_color_label"]')}
  get Description_label()   {return cy.get('[data-cy="zone_desc_label"]')}
  get Remark_label()        {return cy.get('[data-cy="zone_remark_label"]')}
  get status_label()        {return cy.get('[data-cy="zone_status_label"]')}
  

  // Elements for filter section

  get search_id() { return cy.get('[id="id_id"]') }
  get search_code() { return cy.get('[id="id_code"]') }
  get search_name() { return cy.get('[id="id_name"]') }
  get search_status() { return cy.get('[id="id_status"]') }
  get search_type() { return cy.get('[id="id_type"]') }  
  get search_businesstype() { return cy.get('[id="id_business_type"]') }
  get search_color() { return cy.get('[id="id_color"]') }
  get advancefilter() { return cy.get('[data-cy="filter_advance"]') }  
  get resetBtn() { return cy.get('[data-cy="filter_reset"]') }
  get searchBtn() { return cy.get('[data-cy="filter_submit"]') }
  get id_of_search_record() { return cy.get('.box-content > .table-responsive-md td').eq(1) }
  get filterZoneBin() { return cy.get('[id="id_filter_params"]') }
  get filter_noResult() { return cy.get('[class="cart_table_item"]') }


  // Elements for import section
  get importfile()                  { return cy.get('[data-cy="upload_file"]') }
  get removefile()                  { return cy.get('[data-cy="upload_removefile"]') }
  get uploadbtn()                   { return cy.get('[data-cy="upload_btn"]') }
  get zone_confirmbtn()             { return cy.get('[data-cy="upload_confirm_btn"]') }
  get remove_import_message()       {return cy.get('[data-bv-result="INVALID"]')}


  //Elements for Toast message
  get errormsg()                    { return cy.get('[data-cy="error_message_1"]') }
  get errormsg2()                   { return cy.get('[data-cy="error_message_2"]') }
  get toast_input_code()            { return cy.get('[class="ui-pnotify "]') }

  //Download function
  get btnDownloadParent()            {return cy.get ('[data-cy="download_excel"]')}
  get btnDownloadCurrentPage()       {return cy.get ('[data-cy="download_curr_excel"]')}
  get btnDownloadAll()               {return cy.get ('[data-cy="download_all_excel"]')}
}

export default new zone()
