class Navbar {
  get menu()                {return cy.get('#mainNav')}
  get masterdataMenu()      {return cy.get('[data-cy="menu_masterdata"]')}
  get uomMenu()             {return cy.get('[data-cy="menu_mdata_uom"]')}
  get packageMenu()         {return cy.get('[data-cy="menu_mdata_package"]')}
  get customerMenu()        {return cy.get('[data-cy="menu_mdata_cuz"]')}
  get cartontypeMenu()      {return cy.get('[data-cy="menu_mdata_cartontype"]')}
  get customfieldMenu()     {return cy.get('[data-cy="menu_mdata_cfield"]')}
  get skuMenu()             {return cy.get('[data-cy="menu_mdata_sku"]')}
  get userMenu()            {return cy.get('[data-cy="menu_mdata_users"]')}
  get staffMenu()           {return cy.get('[data-cy="menu_mdata_staff"]')}
  get zoneMenu()            {return cy.get('[data-cy="menu_mdata_zone"]')}
  get customfieldMenu()     {return cy.get('[data-cy="menu_mdata_cfield"]')}
  get inventoryMenu()       {return cy.get('[data-cy="menu_inventory"]')}
  get cyclecountMenu()      {return cy.get('[data-cy="menu_inv_cc"]')}
  get instantcountMenu()    {return cy.get('[data-cy="menu_inv_ic"]')}
  get barcodeMenu()         {return cy.get('[data-cy="menu_mdata_barconfig"]')}
  get locationMenu()        {return cy.get('[data-cy="menu_mdata_location"]')}
  get lcrequestMenu()       {return cy.get('[data-cy="menu_inv_bintransfer_request"]')}
  get binMenu()             {return cy.get('[data-cy="menu_mdata_bin"]')}
  get feetypeMenu()         {return cy.get('[data-cy="menu_mdata_extrafeet"]')}
  get pttypeMenu()          {return cy.get('[data-cy="menu_mdata_ptt"]')}
  get vastypeMenu()         {return cy.get('[data-cy="menu_mdata_vast"]')}
  get ProcessingMenu()      {return cy.get('[data-cy="menu_processing"]')}
  get PTMenu()              {return cy.get('[data-cy="menu_pro_task"]')}
  get VASMenu()             {return cy.get('[data-cy="menu_pro_add_service"]')}
  get userlocationMenu()    {return cy.get('[data-cy="menu_mdata_userloca"]')}
  get whMenu()              {return cy.get('[data-cy="menu_warehouse"]')}
  get mywhMenu()            {return cy.get('[data-cy="menu_mywh"]')}
  get inventoryStock()      {return cy.get('[data-cy="menu_inv_allstock"]')}
  get inventoryPallet()     {return cy.get('[data-cy="menu_inv_pallet"]')}
  get activityMenu()        {return cy.get('[data-cy="menu_mdata_ar"]')}



  get ibMenu()              {return cy.get('[data-cy="menu_inbound"]')}
  get iblistMenu()          {return cy.get('[data-cy="menu_ib_list"]')}
  get ibReceiptMenu()       {return cy.get('[data-cy="menu_ib_inbound_receipt"]')}
  get ContainerMenu()       {return cy.get('[data-cy="menu_ib_cont"]')}

  get obMenu()              {return cy.get('[data-cy="menu_outbound"]')}
  get oblistMenu()          {return cy.get('[data-cy="menu_ob_list"]')}
  get cartMenu()            {return cy.get('[data-cy="menu_ob_cart"]')}
  get ShippingLabelMenu()   {return cy.get('[data-cy="menu_ob_shippinglabel"]')}
  get obBOLLabelMenu()      {return cy.get('[data-cy="menu_ob_billlading"]')}

  get rptMenu()             {return cy.get('[data-cy="menu_report"]')}
  get invsb2breportMenu()   {return cy.get('[data-cy="menu_rp_invsumbb2b"]')}
  get invsb2creportMenu()   {return cy.get('[data-cy="menu_rp_invsumbb2c"]')}
  get rcptb2breportMenu()   {return cy.get('[data-cy="menu_rp_receipt_sumbb2b"]')}

  //Common element
  get form_title()          {return cy.get('[data-cy="form-title"]')}
  get page_summary()        {return cy.get('[class="page_summary"]').eq(0)}
  get filter_btn()          {return cy.get('[data-cy="filter_button"]')}
  get advance_filter_btn()  {return cy.get('[data-cy="filter_advance"]')}
  get resetBtn()            {return cy.get('[data-cy="filter_reset"]')}
  get searchBtn()           {return cy.get('[data-cy="filter_submit"]')}

  get bol_filter_form()     {return cy.get('[data-cy="partial-filter-form"]')}
}

export default new Navbar()
