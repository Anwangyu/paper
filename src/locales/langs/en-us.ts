const local: App.I18n.Schema = {
  system: {
    title: 'Snail Job',
    desc: 'A flexible, reliable, and fast platform for distributed task retry and distributed task scheduling.',
    updateTitle: 'System Version Update Notification',
    updateContent: 'A new version of the system has been detected. Do you want to refresh the page immediately?',
    updateConfirm: 'Refresh immediately',
    updateCancel: 'Later'
  },
  common: {
    action: 'Action',
    add: 'Add',
    addSuccess: 'Add Success',
    backToHome: 'Back to home',
    batchDelete: 'Batch Delete',
    batchAdd: 'Batch Add',
    cancel: 'Cancel',
    close: 'Close',
    check: 'Check',
    expandColumn: 'Expand Column',
    columnSetting: 'Column Setting',
    config: 'Config',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    rollback: 'Rollback',
    batchRollback: 'Batch Rollback',
    rollbackSuccess: 'Rollback Success',
    deleteSuccess: 'Delete Success',
    confirmDelete: 'Are you sure you want to delete?',
    checkUploadType: 'Only JSON format files can be uploaded, please re-upload',
    second: 's',
    millisecond: 'ms',
    import: 'Import',
    export: 'Export',
    exportAll: 'Are you sure to export all?',
    exportPar: 'Are you sure to export {num} pieces of data?',
    edit: 'Edit',
    warning: 'Warning',
    error: 'Error',
    detail: 'Detail',
    index: 'Index',
    keywordSearch: 'Please enter keyword',
    logout: 'Logout',
    logoutConfirm: 'Are you sure you want to log out?',
    updatePassword: 'Update password',
    changePassword: 'Change password',
    lookForward: 'Coming soon',
    modify: 'Modify',
    modifySuccess: 'Modify Success',
    noData: 'No Data',
    operate: 'Operate',
    pleaseCheckValue: 'Please check whether the value is valid',
    refresh: 'Refresh',
    reset: 'Reset',
    search: 'Search',
    switch: 'Switch',
    tip: 'Tip',
    trigger: 'Trigger',
    update: 'Update',
    updateSuccess: 'Update Success',
    updateFailed: 'Update Failed',
    downloadFail: 'File download failed',
    success: 'Success',
    fail: 'Fail',
    stop: 'Stop',
    confirmStop: 'Confirm Stop?',
    execute: 'Execute',
    batchList: 'Batch',
    copy: 'Copy',
    resume: 'Resume',
    pause: 'Pause',
    finish: 'Finish',
    running: 'Running',
    operateSuccess: 'Operate successfully',
    operateFailed: 'Operate failed',
    executeSuccess: 'Execute successfully',
    executeFailed: 'Execute failed',
    confirmExecute: 'Are you sure you want to execute?',
    confirmResume: 'Are you sure you want to resume?',
    confirmPause: 'Are you sure you want to pause?',
    confirmFinish: 'Are you sure you want to finishe?',
    idDetailTip: 'Click on ID for details',
    log: 'Log',
    generateRandomly: 'Generate randomly',
    active: 'Active',
    yesOrNo: {
      yes: 'Yes',
      no: 'No'
    },
    status: {
      enable: 'Enable',
      disable: 'Disable'
    },
    routeKey: {
      routeLabel: 'Route Key',
      routeForm: 'Please enter route key',
      items: {
        consistentHash: 'Consistent hash',
        random: 'Random',
        lru: 'LRU',
        round: 'Round robin',
        first: 'First',
        last: 'Last'
      }
    },
    blockStrategy: {
      label: 'Block Strategy',
      form: 'Please enter block strategy',
      items: {
        discard: 'Discard',
        overwrite: 'Overwrite',
        parallel: 'Parallel',
        recovery: 'Recovery'
      }
    },
    failStrategy: {
      items: {
        skip: 'Skip',
        blockage: 'Blockage'
      }
    },
    workFlowNodeStatus: {
      items: {
        open: 'Open',
        close: 'Close'
      }
    },
    executorType: {
      label: 'Executor Type',
      form: 'Please enter executor type',
      items: {
        java: 'Java',
        python: 'Python'
      }
    },
    taskType: {
      label: 'Task Type',
      form: 'Please enter task type',
      items: {
        cluster: 'Cluster',
        broadcast: 'Broadcast',
        slice: 'Static Slice',
        map: 'Map',
        mapreduce: 'MapReduce'
      }
    },
    triggerType: {
      label: 'Trigger type',
      form: 'Please enter trigger type',
      items: {
        cron: 'CRON',
        fixed: 'Fixed time',
        workflow: 'Workflow'
      }
    },
    taskBatchStatus: {
      label: 'Task Batch Status',
      form: 'Please enter task batch status',
      items: {
        waiting: 'Waiting',
        running: 'Running',
        success: 'Success',
        fail: 'Fail',
        stop: 'Stop',
        cancel: 'Cancel',
        decisionFailed: 'Decision Failed',
        skip: 'Skip'
      }
    },
    taskStatus: {
      label: 'Task Status',
      form: 'Please enter task status',
      items: {
        running: 'Running',
        success: 'Success',
        fail: 'Fail',
        stop: 'Stop',
        cancel: 'Cancel'
      }
    },
    jobOperationReason: {
      label: 'Job Operation Reason',
      form: 'Please enter job operation reason',
      items: {
        none: 'None',
        taskExecutionTimeout: 'Task execution timeout',
        notClient: 'No client',
        closed: 'Job closed',
        discard: 'Job discard',
        overlay: 'Job overlapped',
        notExecutionTask: 'No execution task',
        taskExecutionError: 'Execution error',
        mannerStop: 'Manual stop',
        workflowConditionNodeExecutionError: 'Condition node execution error',
        jobTaskInterrupted: 'Job interrupted',
        workflowCallbackNodeExecutionError: 'Callback node execution error',
        workflowNodeNoRequired: 'No process required',
        workflowNodeClosedSkipExecution: 'Node closed, skip execution',
        workflowDecisionFailed: 'Workflow decision failed'
      }
    },
    updateDt: 'Updated Time',
    createDt: 'Created Time',
    today: 'Today',
    lastWeek: 'Last Week',
    currentMonth: 'Current Month',
    lastMonth: 'Last Month',
    lastTwoMonth: 'Last 2 Month',
    systemTaskType: {
      callback: "",
      job: "",
      workflow: ""
    }
  },
  request: {
    logout: 'Logout user after request failed',
    logoutMsg: 'User status is invalid, please log in again',
    logoutWithModal: 'Pop up modal after request failed and then log out user',
    logoutWithModalMsg: 'User status is invalid, please log in again',
    refreshToken: 'The requested token has expired, refresh the token',
    tokenExpired: 'The requested token has expired'
  },
  theme: {
    themeSchema: {
      title: 'Theme Schema',
      light: 'Light',
      dark: 'Dark',
      auto: 'Follow System'
    },
    grayscale: 'Grayscale',
    colourWeakness: 'Colour Weakness',
    layoutMode: {
      title: 'Layout Mode',
      vertical: 'Vertical Menu Mode',
      horizontal: 'Horizontal Menu Mode',
      'vertical-mix': 'Vertical Mix Menu Mode',
      'horizontal-mix': 'Horizontal Mix menu Mode',
      reverseHorizontalMix: 'Reverse first level menus and child level menus position'
    },
    recommendColor: 'Apply Recommended Color Algorithm',
    recommendColorDesc: 'The recommended color algorithm refers to',
    themeColor: {
      title: 'Theme Color',
      primary: 'Primary',
      info: 'Info',
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      followPrimary: 'Follow Primary'
    },
    scrollMode: {
      title: 'Scroll Mode',
      wrapper: 'Wrapper',
      content: 'Content'
    },
    page: {
      animate: 'Page Animate',
      mode: {
        title: 'Page Animate Mode',
        fade: 'Fade',
        'fade-slide': 'Slide',
        'fade-bottom': 'Fade Zoom',
        'fade-scale': 'Fade Scale',
        'zoom-fade': 'Zoom Fade',
        'zoom-out': 'Zoom Out',
        none: 'None'
      }
    },
    fixedHeaderAndTab: 'Fixed Header And Tab',
    header: {
      height: 'Header Height',
      breadcrumb: {
        visible: 'Breadcrumb Visible',
        showIcon: 'Breadcrumb Icon Visible'
      }
    },
    tab: {
      visible: 'Tab Visible',
      cache: 'Tab Cache',
      height: 'Tab Height',
      mode: {
        title: 'Tab Mode',
        chrome: 'Chrome',
        button: 'Button'
      }
    },
    sider: {
      inverted: 'Dark Sider',
      width: 'Sider Width',
      collapsedWidth: 'Sider Collapsed Width',
      mixWidth: 'Mix Sider Width',
      mixCollapsedWidth: 'Mix Sider Collapse Width',
      mixChildMenuWidth: 'Mix Child Menu Width'
    },
    footer: {
      visible: 'Footer Visible',
      fixed: 'Fixed Footer',
      height: 'Footer Height',
      right: 'Right Footer'
    },
    watermark: {
      visible: 'Watermark Full Screen Visible',
      text: 'Watermark Text'
    },
    themeDrawerTitle: 'Theme Configuration',
    pageFunTitle: 'Page Function',
    configOperation: {
      copyConfig: 'Copy Config',
      copySuccessMsg: 'Copy Success, Please replace the variable "themeSettings" in "src/theme/settings.ts"',
      resetConfig: 'Reset Config',
      resetSuccessMsg: 'Reset Success'
    }
  },
  route: {
    login: 'Login',
    403: 'No Permission',
    404: 'Page Not Found',
    500: 'Server Error',
    'iframe-page': 'Iframe',
    log: 'Log',
    home: 'Home',
    pods: 'Online Machine',
    namespace: 'Namespace',
    notify: 'Notify',
    notify_recipient: 'Notify Recipient',
    notify_config: 'Notify Config',
    user: 'User',
    user_manager: 'User Info',
    vehicle: 'Vehicle',
    vehicle_manager: 'Vehicle Info',
    workflow: 'Workflow',
    workflow_task: 'Workflow Task',
    workflow_batch: 'Workflow Batch',
    workflow_form: 'Workflow',
    workflow_form_copy: 'Copy Workflow',
    workflow_form_batch: 'Workflow Batch Detail',
    workflow_form_detail: 'Workflow Detail',
    workflow_form_edit: 'Edit Workflow',
    workflow_form_add: 'Add Workflow',
    job: 'Schedule Task Management',
    job_task: 'Schedule Task List',
    job_batch: 'Schedule Task Batch List',
    group: 'Group Config',
    document: ""
  },
  page: {
    common: {
      upadteTime: 'Update Time',
      createTime: 'Create Time'
    },
    login: {
      common: {
        loginOrRegister: 'Login/Register',
        userNamePlaceholder: 'Please enter user name',
        phonePlaceholder: 'Please enter phone number',
        codePlaceholder: 'Please enter verification code',
        passwordPlaceholder: 'Please enter password',
        confirmPasswordPlaceholder: 'Please enter password again',
        codeLogin: 'Verification code login',
        confirm: 'Confirm',
        login: 'Login',
        back: 'Back',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Login successfully',
        welcomeBack: 'Welcome back, {userName} !',
        codeTip: 'Drag the sliders to complete the puzzle'
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember Me',
        forgetPassword: 'Forget Password?',
        register: 'Register',
        otherAccountLogin: 'Other Account Login',
        otherLoginMode: 'Other Login Mode',
        superAdmin: 'Super Admin',
        admin: 'Admin',
        user: 'User'
      }
    },
    home: {
      Greeting: '{userName}, welcome back.',
      morningGreeting: 'Good morning, {userName}, today is another day full of vitality!',
      bthGreeting: "Good morning, {userName}, how's work going? Don't be sedentary. Get up and walk around more often!",
      noonGreeting: "Good noon, {userName}, it's lunchtime after a long morning at work!",
      athGreeting: "Good afternoon, {userName}, it's easy to get sleepy in the late afternoon yet, time for a nap!",
      duskGreeting:
        "{userName}, it's evening, the view of the sunset outside the window is very beautiful, the most beautiful thing is the red sunset.",
      eveningGreeting: 'Good evening, {userName}, how are you doing today? Please take care to rest early!',
      earlyMorningGreeting: "{userName}, It's so late already. Get some rest. Good night.",
      jobTaskCount: 'Job Task',
      userCount: 'User',
      jobTask: 'Job Task',
      jobBatch: 'Job Batch',
      jobTaskTip: 'Success rate: total completion/total dispatch amount',
      onlineServiceCount: 'Online Machine',
      onlineServiceTip: 'Always online machines: the sum of clients and servers registered to the system',
      workflow: 'Workflow',
      workflowTip: 'Success rate: total completion/total dispatch amount',
      machine: {
        type: {
          client: 'Client',
          server: 'Server'
        }
      },

      retryTab: {
        params: {
          day: 'Today',
          week: 'Lask Week',
          month: 'Last Month',
          year: 'Year Round'
        },
        rank: {
          title: 'Failure Ranking',
          titleRetry: 'Total Amount Ranking'
        },
        task: {
          title: 'Task Summary',
          groupName: 'Group Name',
          run: 'Running Task Total',
          total: 'Task Total'
        },
        pie: {
          title: 'Success scale chart'
        }
      }
    },
    pods: {
      title: 'Online Machine',
      nodeType: 'Node Type',
      groupName: 'Group Name',
      hostId: 'Pod ID',
      hostIp: 'IP',
      hostPort: 'Port',
      consumerBuckets: 'Path/Buckets',
      updateDt: 'Update Time',
      contextPath: 'Path/Buckets',
      form: {
        groupName: 'Please enter group name'
      },
      type: {
        client: 'Client',
        server: 'Server'
      }
    },
    namespace: {
      title: 'Namespace',
      name: 'Name',
      keyword: 'Name/UniqueId',
      uniqueId: 'Unique ID (default UUID)',
      form: {
        name: 'Please enter name',
        keyword: 'Please enter name/uniqueId',
        uniqueId: 'Please enter Unique ID',
        uniqueIdRule:
          'Must be between 1 and 64 characters in length. Format: numbers, letters, underscores, or hyphens.'
      },
      addNamespace: 'Add Namespace',
      editNamespace: 'Edit Namespace'
    },
    groupConfig: {
      title: 'Group Config List',
      detail: 'Group Detail',
      namespaceId: 'Namespace ID',
      groupName: 'Group Name',
      token: 'Token',
      groupStatus: 'Status',
      idGeneratorMode: 'ID Generator Mode',
      version: 'Version',
      groupPartition: 'Partition',
      initScene: 'Initial Scene',
      bucketIndex: 'Bucket',
      updateDt: 'Update Time',
      description: 'Description',
      commonConfig: 'Common Config',
      retryConfig: 'RetryConfig',
      form: {
        groupName: 'Please enter group name',
        token: 'Please enter token',
        groupStatus: 'Please select group status',
        description: 'Please enter description',
        idGeneratorMode: 'Please select ID generator mode',
        groupPartition: 'Please select group partition',
        initScene: 'Initialized scene',
        collapseCommon: 'Common config',
        collapseRetry: 'Retry config',
        groupNameRule:
          'Group name: Must be between 1 and 64 characters in length. Format: numbers, letters, underscores, or hyphens.'
      },
      idMode: {
        idWorker: 'Id Workder',
        segment: 'Segment'
      },
      addGroupConfig: 'Add Group Config',
      editGroupConfig: 'Edit Group Config',
      generateToken: 'Generate Randomly'
    },
    notifyConfig: {
      title: 'Alarm Notify List',
      groupName: 'Group name',
      businessName: 'Business ID',
      notifyName: 'Notify name',
      notifyStatus: 'State',
      notifyType: 'Notify type',
      notifyScene: 'Notify scene',
      notifyThreshold: 'Notify threshold',
      description: 'Describe',
      notifyAttribute: 'Notify Attribute',
      job: 'Job',
      workflow: 'Workflow',
      form: {
        description: 'Please enter Describe',
        notifyType: 'Please select Notification type',
        notifyAttribute: 'Please enter notify attribute',
        notifyScene: 'Please select Notification scene',
        groupName: 'Please select Group name',
        notifyThreshold: 'Please enter Notification threshold',
        notifyName: 'Please enter name',
        notifyStatus: 'Please select State',
        systemTaskType: 'Please enter task type',
        notifyRecipient: 'Please enter recipient',
        rateLimiterThreshold: 'Please enter rate limiter threshold',
        sceneName: 'Please enter scene name',
        jobName: 'Please enter job name',
        workflowName: 'Please enter workflow name'
      },
      addNotifyConfig: 'Add Alarm notification',
      editNotifyConfig: 'Add Alarm notification',
      systemTaskType: 'Task type',
      jobNotifyScene: {
        jobTaskError: 'Task execute error',
        jobClientError: 'Client execute error',
        jobNoClientNodesError: 'Job No Client execute error'
      },
      workflowNotifyScene: {
        workflowClientError: 'Client execute error',
        workNoClientNodesError: 'Workflow No Client execute error',
        workTaskError: 'Workflow task execute error'
      },
      notifyRecipient: 'Notify recipient',
      rateLimiterStatus: 'Rate limiter status',
      rateLimiterThreshold: 'Rate limiter threshold',
      retryScene: ""
    },
    notifyRecipient: {
      title: 'Notify Recipient List',
      detail: 'Notify Recipient Detail',
      recipientName: 'Recipient Name',
      notifyType: 'Notification Type',
      notifyAttribute: 'Attribute Information',
      description: 'Description',
      form: {
        description: 'Please enter description',
        notifyAttribute: 'Please enter attribute information',
        recipientName: 'Please enter recipient name',
        notifyType: 'Please select notification type',
        dingDingAts: "Please enter the {'@'} phone number or DingTalk ID",
        weComAts: "Please enter the {'@'} Enterprise WeChat user ID",
        larkAts: "Please enter the {'@'} open_id",
        webhookUrl: 'Please enter URL',
        secret: 'Please enter secret',
        contentType: 'Please enter Request type',
        applicationJson: 'application/json',
        applicationXWwwFormUrlencoded: 'application/x-www-form-urlencoded'
      },
      addNotifyRecipient: 'Add Notify Recipient',
      editNotifyRecipient: 'Edit Notify Recipient',
      ats: "{'@'} Notification Recipient",
      webhookUrl: 'Notification Address',
      secret: 'secret',
      tos: 'Recipient Email Address',
      dingDing: 'DingTalk',
      email: 'Email',
      weCom: 'WeCom',
      lark: 'Lark',
      webhook: 'webhook',
      contentType: 'Request type'
    },

    workflowBatch: {
      title: 'Workflow Batch List',
      workflowName: 'Workflow name',
      groupName: 'Group name',
      executionAt: 'Execution time',
      taskBatchStatus: 'State',
      operationReason: 'Reason for operation',
      createDt: 'Creation time',
      form: {
        workflowName: 'Please enter Workflow name',
        taskBatchStatus: 'Please enter State',
        groupName: 'Please enter Group name'
      },
      addWorkflowBatch: 'Add Workflow batch',
      editWorkflowBatch: 'Add Workflow batch'
    },
    workflow: {
      title: 'Workflow List',
      workflowName: 'Workflow name',
      groupName: 'Group name',
      nextTriggerAt: 'Trigger time',
      workflowStatus: 'State',
      triggerType: 'Trigger type',
      triggerInterval: 'Interval duration',
      executorTimeout: 'Overtime time',
      updateDt: 'Update time',
      form: {
        workflowName: 'Please enter Workflow name',
        groupName: 'Please enter Group name',
        workflowStatus: 'Please enter State'
      },
      addWorkflow: 'Add Workflow',
      editWorkflow: 'Add Workflow'
    },
    jobTask: {
      title: 'JobTask List',
      groupName: 'Group name',
      ownerName: 'Ower name',
      jobName: 'Mission name',
      argsStr: 'Method parameters',
      shardNum: 'Reduce shard num',
      argsType: 'Parameter Type',
      nextTriggerAt: 'Next trigger time',
      jobStatus: 'State',
      routeKey: 'Routing strategy',
      executorType: 'Executor type',
      executorInfo: 'Executor name',
      triggerType: 'Trigger type',
      triggerInterval: 'Interval duration',
      blockStrategy: 'Blocking strategy',
      executorTimeout: 'Overtime time(s)',
      maxRetryTimes: 'Maximum number of retries',
      retryInterval: 'Retry interval',
      taskType: 'Task type',
      parallelNum: 'Parallel number',
      bucketIndex: 'Bucket',
      description: 'Description',
      updateDt: 'Update time',
      notifyId: 'Notify',
      form: {
        jobStatus: 'Please enter status',
        ownerName: 'Please enter ownerName',
        maxRetryTimes: 'Please enter maximum number of retry',
        description: 'Please enter description',
        triggerType: 'Please enter trigger type',
        jobName: 'Please enter Mission name',
        executorTimeout: 'Please enter executor timeout',
        triggerInterval: 'Please enter interval duration',
        triggerInterval_CRON: 'Please enter cron expression',
        taskType: 'Please enter Task type',
        parallelNum: 'Please enter Parallel number',
        bucketIndex: 'Please enter Bucket',
        executorType: 'Please enter executor type',
        executorInfo: 'Please enter executor name',
        routeKey: 'Please enter Routing strategy',
        blockStrategy: 'Please enter Blocking strategy',
        argsType: 'Please enter Parameter Type',
        argsStr: 'Please enter executor arguments',
        shardNum: 'Please enter reduce shard num',
        groupName: 'Please enter Group name',
        retryInterval: 'Please enter retry interval',
        notifyId: 'Please select notify config'
      },
      addJobTask: 'Add job task',
      editJobTask: 'Edit job task',
      triggerTypeItem: {
        fixed: 'Fixed rate',
        cron: 'CRON expression',
        workflow: 'Workflow'
      },
      detail: 'Job Task Detail'
    },
    jobBatch: {
      title: 'Job Batch List',
      groupName: 'Group name',
      jobName: 'Job name',
      taskType: 'Task Type',
      executorInfo: 'Executor Name',
      executorType: 'Executor type',
      executionAt: 'Start execution time',
      duration: 'Execution duration (s)',
      taskBatchStatus: 'Task Batch Status',
      operationReason: 'Reason for operation',
      form: {
        groupName: 'Please enter group name',
        jobName: 'Please enter job name',
        taskBatchStatus: 'Please enter state'
      },
      detail: 'Job Batch Detail',
      jobTask: {
        title: 'Job task list',
        id: 'ID',
        groupName: 'Group name',
        taskStatus: 'Status',
        clientInfo: 'Client address',
        argsStr: 'Argument string',
        resultMessage: 'Result message',
        retryCount: 'Number of retries',
        createDt: 'Create time'
      }
    },
    userManager: {
      title: 'UserCenter List',
      username: 'Username',
      role: 'Role',
      permissions: 'Permission',
      checkPassword: 'Confirm Password',
      password: 'Password',
      updatePassword: 'Update Password',
      permissionList: 'Permission List',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      form: {
        ownerName: 'Please select ownerName',
        role: 'Please enter role',
        password: 'Please enter password',
        username: 'Please enter username',
        checkPassword: 'Please enter confirm password',
        permissions: 'Please select group',
        namespaceIds: 'Please select namespaces',
        oldPassword: 'Please enter old password',
        newPassword: 'Please enter new password'
      },
      addUser: 'Add User',
      editUser: 'Add User',
      roleItem: {
        user: 'User',
        admin: 'Admin'
      }
    },
    vehicleManager: {
      title: 'Vehicle List',
      vehicleName: 'Vehicle Name',
      vehicleParts: 'Department',
      vehicleDriver: 'Driver',
      vehicleStates: 'Status',
      vehicleDispatchInfo: 'Dispatch Information',
      vehiclePersonCharge: 'Person in Charge',
      vehicleType: 'Type',
      form: {
        vehicleName: 'Please enter the vehicle name',
        vehicleParts: 'Please select a department',
        vehicleDriver: 'Please enter the driver',
        vehicleStates: 'Please select the vehicle status',
        vehicleDispatchInfo: 'Please enter the dispatch information',
        vehiclePersonCharge: 'Please enter the person in charge',
        vehicleType: 'Please select the type'
      },
      addVehicle: 'Add Vehicle Management',
      editVehicle: 'Edit Vehicle Management',
      type: {
        Suv: 'Sport Utility Vehicle',
        Mpv: 'Multi-Purpose Vehicle',
        Sedan: 'Sedan',
        Coupe: 'Coupe',
        Supercar: 'Supercar',
        Jeep: 'Jeep',
        Minivan: 'Minivan',
        StationWagon: 'Station Wagon',
        Truck: 'Truck',
        Bus: 'Bus',
        Hybrid: 'Hybrid Vehicle',
        EV: 'Electric Vehicle',
        Pickup: 'Pickup Truck'
      }
    },





    log: {
      title: 'Log Detail',
      view: 'View Log',
      info: 'Info'
    }
  },
  workflow: {
    node: {
      priority: 'Priority',
      task: {
        name: 'Task',
        add: 'Add Task',
        nodeName: 'Task Node',
        conditionNodes: {
          nodeName: 'Task 1'
        }
      },
      condition: {
        nodeName: 'Condition Node',
        conditionNodes: {
          nodeName: 'Condition 1',
          otherNodeName: 'Other Situations',
          otherTip:
            'This branch is created by default and is mutually exclusive with other branches. It will only be run if none of the other branches can be run.',
          priority: 'Priority',
          conditionTip: 'Please set conditions',
          logicalCondition: 'Logical Condition',
          expressionType: 'Expression Type',
          nodeExpression: 'Node Expression',
          otherNodeTip:
            'If there is a situation where the conditions of the other branches are not met, then go to this branch'
        },
        addBranch: 'Add Condition'
      },
      callback: {
        nodeName: 'Callback Notice',
        conditionNodes: {
          nodeName: 'Callback Notice',
          contentType: 'Content Type',
          webhookTip: 'Please configure callback notifications'
        }
      },
      endNode: 'End Node',
      log: {
        title: 'Log Detail'
      }
    }
  },
  form: {
    required: 'Cannot be empty',
    userName: {
      required: 'Please enter user name',
      invalid: 'User name format is incorrect'
    },
    phone: {
      required: 'Please enter phone number',
      invalid: 'Phone number format is incorrect'
    },
    pwd: {
      required: 'Please enter password',
      invalid: 'Letters, numbers, and special characters, combination of two, 6 to 20 characters'
    },
    confirmPwd: {
      required: 'Please enter password again',
      invalid: 'The two passwords are inconsistent'
    },
    code: {
      required: 'Please enter verification code',
      invalid: 'Verification code format is incorrect'
    },
    email: {
      required: 'Please enter email',
      invalid: 'Email format is incorrect'
    }
  },
  dropdown: {
    closeCurrent: 'Close Current',
    closeOther: 'Close Other',
    closeLeft: 'Close Left',
    closeRight: 'Close Right',
    closeAll: 'Close All'
  },
  icon: {
    themeConfig: 'Theme Configuration',
    themeSchema: 'Theme Schema',
    lang: 'Switch Language',
    fullscreen: 'Fullscreen',
    fullscreenExit: 'Exit Fullscreen',
    magnify: 'Magnify',
    restore: 'Restore',
    reload: 'Reload Page',
    collapse: 'Collapse Menu',
    expand: 'Expand Menu',
    pin: 'Pin',
    unpin: 'Unpin',
    namespace: 'Switch namespace'
  },
  datatable: {
    itemCount: 'Total {total} items'
  }
};

export default local;
