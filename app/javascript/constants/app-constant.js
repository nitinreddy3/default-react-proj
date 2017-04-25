const CONSTANTS = {
    APP: {
        //TODO: Get the value of base URL according to the environment
        apiBaseUrl: 'spectrum-api/api/'
    },

    COUNTRY : {

    },

    TRANSACTION_DATA : {
        outstanding: 'NV',
        shoppingCart: 'SC',
        defaultOutstandingOption: 'NMITS'
    },

    API_URLS: {
        internalUser: {
            login:'user/internal/login',
            associatedCustomers: 'customer/internal/associatedCustomers/{customerId}',
            projects: 'customer/internal/{id}/associated/{associatedId}/projects'
        },
        sso: 'sso/token/url',
        mnpSso: 'sso/classicMnp/token/url',
        combinationId: 'customer/combinationId',
        login: 'user/login',
        logout: 'user/logout',
        resetPassword: 'user/password/update',
        regenPassword: 'user/generate/token',
        signup: {
            createLead: 'user/signup',
            opportunity: 'user/opportunity',
            verify: 'user/verify',
        },
        splashScreen: 'user/splash/data',
        ticketWidget: 'tickets/widget/{customerId}?associateCustomerId={associatedId}&projectId={projectId}',
        ticketTypes: 'tickets/types',
        ticketSubTypes: 'tickets/subtypes?caseTypeId=',
        associatedCustomers: 'customer/associatedCustomers',
        associatedProjects: 'customer/{id}/associated/{associatedId}/projects',
        associatedContacts: 'customer/{id}/associated/{associatedId}/contacts',
        createTicket: 'tickets/create',
        tickets: 'tickets/',
        ticketDetails: 'tickets/{ticketId}',
        downloadTicketAttachment: 'tickets/download/{id}',
        ticketsConfig: 'tickets/config',
        ticketUpdateWorklog: 'tickets/{ticketNumber}/worklog/update',
        serviceSOFList: 'services/sofs/{customerId}?assoCustomerId={assoCustomerId}&projectId={sugarProjectId}',
        serviceSOFLineItems: 'services/line-items/{contractnumber}',
        serviceWidget: 'services/widget/{customerId}?assoCustomerId={assoCustomerId}&projectId={sugarProjectId}',
        contactsWidget: 'contacts/widget/customer/{customerId}?associatedCustomerId={assoCustomerId}',
        contacts: {
            list: 'contacts/customer/{customerId}',
            details: 'contacts/details/user/{userId}',
            update: 'contacts/edit',
            types: 'contacts/types',
            subTypes: 'contacts/subtypes',
            notification: 'notification/customer/{customerId}',
            subtypes: 'contacts/subtypes',
            config: 'contacts/calling/config',
            create: 'contacts/add'
        },
        assetsWidget: 'assets/widget/customer/{customerId}?assoCustomerId={assoCustomerId}',
        assetList: 'assets/',
        assetTags: 'assets/tags/customer/{customerId}?assoCustomerId={assoCustomerId}',
        assetTag: 'assets/tag/{assetId}?tagName={tagName}',
        assetTagRemove: 'assets/tag/remove/{assetId}?tagName={tagName}',
        user: {
            permissions: 'user/permissions'
        },
        role: {
            details: 'role/customer/{customerId}',
            add: 'role/add'
        },
        outstanding: {
            widget: 'outstanding/widget',
            invoices: '/outstanding/list',
            payment: '/outstanding/payment',
            businessUnit: '/outstanding/businessUnits',
            ebsPay: '/spectrum-api/payment/payoutstanding',
        },
        allPermissions: '/authorisation/modules/config',
        ticketStatusUpdate: 'tickets/{ticketNumber}/update',
        flags: 'http://www.geonames.org/flags/x/{flag}.gif',
        shoppingCart: {
            locations: 'shoppingCart/locations',
            subCategories: 'shoppingCart/subCategories',
            subSubCategories: 'shoppingCart/subSubCategories/{subCategoryId}',
            products: 'shoppingCart/products/{subCategoryId}',
            getCart: 'shoppingCart/cartProducts',
            saveCart: 'shoppingCart/cartProducts/save',
            pricing: 'shoppingCart/products/price',
            contract: 'shoppingCart/contract/create',
            billingGroup: 'customer/billingGroup',
            ebsPay: '/spectrum-api/payment/paynow',
            contactsSC: 'shoppingCart/customer/contacts/{customerId}',
            addressSC: 'shoppingCart/customer/address',
        },
        provision: {
            lineItemDetails: 'provision/lineItemDetails',
            sofDetails: 'provision/sofDetails',
            sso: 'http://180.179.164.117:8080/MyNetmagic/welcomeGWT.jsp',
            provision: 'shoppingCart/provision'
        },
        CMPSSO: {
          loginHandler: 'https://cmp.netmagicsolutions.com/glass/login-handler',
          redirectToCmp: 'https://cmp.netmagicsolutions.com/cmp'
        }
    },

    UI_MESSAGES: {
        timeoutError: "It seems we are facing some issues, please try again",
        outstandingCalcualtionError: 'Kindly de-select a credit note or on account payment, payment amount cannot be lesser than 0',
        outstandingTdsCalcError: 'Kindly de-select a credit note or onAccount payment from this invoice first before modifying the tds',
        forceResetPassword : 'Your Password has expired, a mail has been sent to your registered email id, kindly Regenerate Your Password.',
        emailSent: 'An email has been sent to your Email Id, kindly reset your password',
        oops: 'Oops, some error occured, kindly refresh and try again',
        sessionExpired: 'Your session has expired, kindly log in again to continue',
        invalidCredentials: 'Invalid Credentials',
        invalidData: 'Invalid',
        ticketCreated: 'Ticket successfully created',
        dataNotFound: 'Data not available',
        widgetNoData: 'Data not found, Please Try again',
        worklogUpdated: 'Ticket Worklog updated successfully',
        worklogError: 'An error occurred in updating ticket worklog',
        sofList: 'No sof item was found',
        sofLineItem: 'No sof line item was found',
        contactUpdated: 'Contact information updated successfully',
        contactCreated: 'Contact created successfully',
        maxAttachments: 'Cannot add more than five attachments',
        fileTooLarge: 'File size is too large',
        fileTypeNotAllowed: 'File type of one of the attachments is not supported',
        emptyComment: 'Cannot update with empty comment',
        userPermissionError: 'Error occurred in fetching user permissions',
        fetchingPermissions: 'Fetching new permissions.',
        tagCreated: 'Tag has been added successfully',
        tagRemoved: 'Tag has been removed successfully',
        downloadFailure: 'Error occured while downloading attachment file',
        downloadSuccess: 'Attachment downloaded successfully',
        emptyFields: 'Please fill in mandatory fields',
        wrongEmail: 'Entered email is invalid',
        wrongPhone: 'Entered phone number is invalid',
        duplicateMailId: 'This email id already exists',
        addMaxContact: 'You can add upto ten contacts only.',
        badRequest: 'Bad Request',
        unauthorized: 'Forbidden',
        ticketStatus: 'Ticket Status changed successfully',
        noTicketFound: 'No ticket was found with this ticket number',
        maxTagLimit: 'You can add only ten tags',
        updateWithoutComment: 'Cannot update ticket without comment',
        invoicePaymentSuccess: 'Invoice payment done successfully',
        invoicePaymentError: 'Error occured while Invoice payment',
        mandatoryCheckbox: 'Please select the atleast one contact type',
        moduleCheck: 'Please select atleast one module permission',
        projectUnavailable: 'No Projects Available',
        badGateway: 'bad gateway',
        ssoInvalidUser: 'Invalid User to Access SSO service',
        role: {
            roleType: 'Please add a role type',
            success: 'Role has been added successfully'
        },
        shoppingCart: {
            locationError: 'Location has not been set, kindly go to step 2 and select your preferred location',
            productListError: 'Sorry, No data available',
            navigationError: 'All prior steps must be completed to navigate to selected step',
            pricingError: 'Pricing could not be calculated for selected options',
            openCartError: 'Close the current cart item before editing another one',
            pricingObjError: 'Please request for pricing details before going to the next step',
            configurationListError:'Select a plan',
            purchaseCart: 'You have not purchased any product yet. Please purchase a product.',
            contactSelectionError: 'Selecting a Bill To address and a Support to address is mandatory',
            addressSelectionError: 'Each role needs to be assigned to any contact'
        },
        signup: {
            compulsary: 'This is a compulsory field',
            invalid: 'Invalid input detected',
            password: 'Passwords do not match',
            validatePassword: 'Please enter valid password',
            email: 'Invalid Email id',
            duns: 'Invalid DUNS Number',
            pan: 'Invalid PAN number',
            adhar: 'Invalid Aadhaar number',
            passport: 'Invalid Passport number',
            alreadyExists: {
                email: 'Email id already exists',
                duns: 'DUNS Number already exists',
                pan: 'PAN number already exists',
                adhar: 'Aadhaar number already exists',
                passport: 'Passport number already exists',
                tan: 'TAN number already exists',
            },
            name: 'Enter a valid name'
        },
        resetPassword: {
            errorMessage: "Link expired , please regenerate your password",
            error: 'New Password and Confirm Password does not match',
            success: 'Your password has been reset successfully',
            passwordError: "Password must contain atleast one uppercase, one lower case, one number and one special character ($@!%*#?&)",
            successMessage: "Password has been re-generated, kindly login"
        },
        roleMandatory: 'Please select roles for the selected customers',
        selectRole: 'Kindly select a role to change permissions'
    },

    CMP_USER: {
      email_id: 'krishnan.v@myntra.com',
      password: 'dummypassword',
      destination: '/cmp'
    },

    SC_CONTACTS:[
        { label: 'Billing', value: 'billing'},
        { label: 'IT Operations', value: 'operations'},
        { label: 'SPOC', value: 'spoc'},
        { label: 'Authorized Signatory', value: 'signatory'},
    ],

    DEFAULT_ASSET_TYPES: ['Physical  Server', 'Storage', 'Cloud Server', 'Network', 'Other', 'Compute'],

    STATUS_CODES: {
        duplicateRole: "5007",
        duplicationUser: "2019",
        internalServerError: "114"
    },

    HEX_COLOR_CODE: '0123456789ABCDEF',

    LABEL_NAME_LIMIT: 17,

    LABEL_NAME_SUBSTR: 20,

    NAME_LIMIT: 20,

    SUB_STRING_LIMIT: 23,

    WHITE: 'white',

    HEX_BASE: 16,

    MAX_CONTACTS: 10,

    DEFAULT_TDS: 10,

    NEW_TICKET_ID: 'newContact',

    ALERT: {
        typeClass: {
            error: 'alert-danger',
            success: 'alert-success',
            info: 'alert-info',
        },
        displayTime: 4000
    },

    DEFAULT_SELECTION: {
        associatedCustomer: "Select Associated Customer",
        project: "Select Project Name",
        caseSubType: "Select Case Sub Type"
    },

    ERROR_CODE: {
        emptyTag: "602",
        duplicateTag: "604",
        compulsaryContactType: "115",
        unauthorized: 401,
        forbidden: 403,
    },

    SSO_MODULE: [
        { label: 'cloud', value: 'CLD' },
        { label: 'monitoring', value: 'NGM' },
        { label: 'simplidrive', value: 'SST' }
    ],

    PRODUCT_TYPE:[
        { label: 'Virtual Network', value: 'virtualNetworkIcon'},
        { label: 'Services', value: 'serviceIcon'},
        { label: 'Virtual Server', value: 'virtualServerIcon'},
        { label: 'Virtual Storage', value: 'virtualStorageIcon'},
    ],

    SETTINTS_TABS: [
        { key: 'notification', title: 'Notification Settings' },
        { key: 'role', title: 'Roles Management' },
        { key: 'contact', title: 'Contact Type Settings' },
    ],

    SHOPPING_CART_PURCHASE_TABS: [
        { key: 'products', title: 'Products', value: 2 },
        { key: 'planDetails', title: 'Plan Details', value: 3 },
        { key: 'configuration', title: 'Configuration', value: 4 },
        { key: 'productPreview', title: 'Product Preview', value: 5 },
    ],

    PRODUCT_TYPES: {
        bundled: 'bundled',
        withAttributes: 'with_attribute',
        standard: 'standard'
    },

    SHOPPING_CART_VARIABLES: {
        YES: 'Yes',
        NO: 'No',
        Success: 'Success',
        Fail: 'Failure',
        BillingAddressType: 'B',
        ShippingAddressType: 'S'
    },

    SERVICE_STATUS: [
        { title: 'Active', value: 'Active' },
        { title: 'To be Delivered', value: 'Not_delivered' },
        { title: 'Under Deactivation', value: 'Under_deactivation' },
        { title: 'Under Cancellation', value: 'Under_cancellation' },
    ],

    TICKET_SEVERITIE_S1: 'S1',

    TICKET_SEVERITIES: {
        'S1': { label: 'Sev 1', severities: ['S1'] },
        'S2': { label: 'Sev 2', severities: ['S2'] },
        'S3': { label: 'Sev 3', severities: ['S3'] },
        'S4-7': { label: 'Sev 4-7', severities: ['S4', 'S5', 'S6', 'S7'] }
    },

    TICKET_STATUS_TYPES: ['Assigned', 'Work in Progress', 'Waiting on Vendor', 'Monitoring'],

    TICKET_FILTERS: {
        ticketSeverity: 'Severity',
        ticketType: 'Type',
        ticketStatus: 'Status'
    },

    TAG_COLORS: ['#E35353', '#F58D49', '#FCCA39', '#B5CC18', '#4DC86A',
        '#33C4BE', '#4D9EDA', '#835DD4', '#B65CD3', '#E760AC', '#B78565',
        '#919191', '#48494A'],

    DUMMY_SOF: [
        {
            contractCode: 'Contract no.',
            SOFId: '50015150',
            ContractPeriod: '--',
            ContractType: 'Contract Type',
            toolTip: {
                title: 'Fuzz',
                companyCode: 'ABC9898',
                companyName: 'DeltaForce',
                startDate: '21 Jan 2016',
                endDate: '23 Jan 2016'
            }
        },
    ],
    DENOMINATION: {
        crore: 10000000,
        lakh: 100000,
    },
    DATE_FORMAT: 'DD MMM YYYY, HH:mm',
    SOF_DATE_FORMAT: 'DD MMM YYYY',
    INPUT_DATE_FORMAT: 'YYYY-MM-DDHH:mm:ss',
    ZERO: 0,
    ONE: 1,
    DUMMY_CUSTOMER_IDS: ['1049', '3852', '5184'],
    DUMMY_CONTACT_ID: 1,
    DUMMY_BUSINESS_UNIT: 'ALL',
    NOT_AVAILABLE: 'NA',
    HYPHEN: '-',
    BUSINESS_UNITS: [
        { name: 'NMITS', id: 'NMITS' },
        { name: 'NSPL', id: 'NMSPL' },
        { name: 'BOTH', id: 'ALL' }
    ],
    PROJECTS: ['Stratos', 'Yosemite'],
    CONTACT_TYPE: 'IT Operations',
    MAX_CHAR_LIMIT: 81,
    HOURS_COUNT: 24,
    MAX_MONTHS: 13,
    MIN_TIME_RANGE: 9,
    TIME: {
        MIN_SECONDS: ':00',
        MAX_SECONDS: ':30',
        THREE_HOURS_IN_SECONDS: 10800000
    },
    YES: 'Y',
    NO: 'N',
    REGEX: {
        PROVIDE_INPUT: /^(Waiting on Customer|Work in Progress|Assigned|Reopen)$/,
        BASE_64: /([\w|\W]+)base64,([\w|\W]+)/,
        NETMAGIC: /mynetmagic/i,
        EMAIL: /^([A-Za-z0-9_\.\-\+#"“”])+\@(([\[a-zA-Z0-9\-])+\.)+([a-zA-Z0-9\]]{2,4})+$/,
        PHONE: /^([0-9]{10})$/,
        PAN: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
        PASSPORT: /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/,
        DUNS: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
        ADHAR: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
        PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
        NAME: /^([a-zA-Z]){1,20}$/
    },
    TICKET_STATUS: {
        ASSIGNED: 'Assigned/WIP',
        PENDING: 'Resolved Pending Closure'
    },
    PENDING_DAYS: {
        MIN: 30,
        MAX: 90,
        MEAN: 60
    },
    INVOICE_STATUS: {
        OPEN: 'Open'
    },
    NEGATIVE_INT: -1,
    GENERIC_TYPE: "Generic ID",
    NUMBER_DENOMINATION: [
        { val: 10000000, unit: 'Crores' },
        { val: 100000, unit: 'Lacs' },
        { val: 1000, unit: 'Thousand' }
    ],
    CURRENCY: {
        US: { id: 'USD', lang: 'en-US' },
        IN: { id: 'INR', lang: 'en-IN' },
        JAP: { id: 'YEN', lang: 'ja' }
    },
    MAX_WORKLOG_ATTACHMENTS: 5,
    KEY_TYPE: {
        ENTER: 'keydown',
        MOUSE: 'mousedown'
    },
    DROPZONE_FILE_TYPES: ['xls', 'xlsx', 'docx', 'doc', 'jpg', 'jpeg', 'pdf', 'png',
        'txt', 'odt', 'pptx', 'ppt', 'mp4', 'mp3', 'zip', 'msg'],
    MAX_FILE_SIZE: 5248000,
    ASSET_TYPES: [
        { id: 1, type: 'All' },
        { id: 2, type: 'Server' },
        { id: 3, type: 'Network' },
        { id: 4, type: 'Storage' },
        { id: 5, type: 'Facility' },
        { id: 6, type: 'Other' }
    ],

    CONTACT_SUB_TYPES: ['IT Operations', 'IT Management'],

    PERMISSION_CODES: {
        tickets: {
            widget: 'tic_wdgt',
            listing: 'tic_list',
            raise: 'tic_cret',
            details: 'tic_view',
            edit: 'tic_edit',
            reopen: 'tic_ropn'
        },
        outstanding: {
            widget: 'ost_wdgt',
            listing: 'ost_list',
            payment: 'ost_payt',
            download: 'ost_invc',
            downloadAll: 'ost_all_invc',
        },
        contacts: {
            widget: 'cnt_wdgt',
            listing: 'cnt_list',
            details: 'cnt_dtls',
            add: 'cnt_add',
            edit: 'cnt_edit',
        },
        assets: {
            widget: 'ast_wdgt',
            listing: 'ast_list',
            viewMonitor: 'ast_mont',
            action: 'ast_actn'
        },
        services: {
            widget: 'ser_wdgt',
            listing: 'ser_list',
            businessChange: 'ser_creq',
            buyNew: 'ser_bynw'
        },
        roles: {
            view: 24,
            edit: 25,
            add: 26
        },
        cloud: {
            view: 'acc_cloud',
        },
        monitoring: {
            view: 'acc_ngm'
        },
        utilization: {
            view: 'acc_utl'
        },
        cmp: {
            view: 'acc_cmp'
        },
        simplidrive: {
            view: 'acc_sim'
        }
    },

    SSO_PERMISSION_CODES: [
        { code: 'acc_cloud', value: 'CLD', label: 'CLOUD' },
        { code: 'acc_ngm', value: 'NGMON', label: 'MONITORING' },
        { code: 'acc_utl', value: 'UTI', label: 'UTILIZATION' },
        { code: 'acc_sim', value: 'SST', label: 'SIMPLIDRIVE' },
    ],

    MODULE_PERMISSIONS: [
        {
            moduleName: 'Ticket',
            permissions: [
                {
                    name: 'Widget',
                    label: 'Publish/Unpublish Widget'
                }, {
                    name: 'Raise',
                    label: 'Raise Ticket'
                }, {
                    name: 'QuickActions',
                    label: 'Quick Actions'
                }, {
                    name: 'Details',
                    label: 'Ticket Details'
                }, {
                    name: 'Attach',
                    label: 'Attach Files'
                },
            ]
        }, {
            moduleName: 'Outstanding',
            permissions: [
                {
                    name: 'Widget',
                    label: 'Widget'
                }, {
                    name: 'Listing',
                    label: 'Listing'
                }, {
                    name: 'Payment',
                    label: 'Payment'
                }, {
                    name: 'Download',
                    label: 'Download'
                }, {
                    name: 'Detail',
                    label: 'Detailed View'
                },
            ]
        }, {
            moduleName: 'Contacts',
            permissions: [
                {
                    name: 'Widget',
                    label: 'Publish/Unpublish Widget'
                }, {
                    name: 'Listing',
                    label: 'Listing'
                }, {
                    name: 'Payment',
                    label: 'Payment'
                }, {
                    name: 'Edit',
                    label: 'Edit Contact'
                }, {
                    name: 'Add',
                    label: 'Add Contact'
                }, {
                    name: 'AccessCard',
                    label: 'Access Card'
                }, {
                    name: 'Notifications',
                    label: 'Notifications'
                }, {
                    name: 'Roles',
                    label: 'Roles & Permission'
                }
            ]
        }
    ],

    DEFAULT_NOTIFICATION_BEANS: [{"notificationType":"S1","sendEmailNotification":"N","sendSmsNotification":"N"},{"notificationType":"S2","sendEmailNotification":"N","sendSmsNotification":"N"},{"notificationType":"S3","sendEmailNotification":"N","sendSmsNotification":"N"},{"notificationType":"S4","sendEmailNotification":"N","sendSmsNotification":"N"},{"notificationType":"S5","sendEmailNotification":"N","sendSmsNotification":"N"},{"notificationType":"S6","sendEmailNotification":"N","sendSmsNotification":"N"},{"notificationType":"S7","sendEmailNotification":"N","sendSmsNotification":"N"}]
};

export default CONSTANTS;
