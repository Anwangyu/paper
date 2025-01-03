const local: App.I18n.Schema = {
  system: {
    title: 'Snail Job',
    desc: '灵活，可靠和快速的分布式任务重试和分布式任务调度平台',
    updateTitle: '系统版本更新通知',
    updateContent: '检测到系统有新版本发布，是否立即刷新页面？',
    updateConfirm: '立即刷新',
    updateCancel: '稍后再说'
  },
  common: {
    action: '操作',
    add: '新增',
    batchAdd: '批量添加',
    addSuccess: '添加成功',
    backToHome: '返回首页',
    batchDelete: '批量删除',
    cancel: '取消',
    close: '关闭',
    check: '勾选',
    expandColumn: '展开列',
    columnSetting: '列设置',
    config: '配置',
    confirm: '确认',
    save: '保存',
    delete: '删除',
    rollback: '回滚',
    batchRollback: '批量回滚',
    rollbackSuccess: '回滚成功',
    deleteSuccess: '删除成功',
    confirmDelete: '确认删除吗？',
    checkUploadType: '只能上传json格式的文件，请重新上传',
    second: '秒',
    millisecond: '毫秒',
    import: '导入',
    export: '导出',
    exportAll: '确认导出列表中全部数据吗?',
    exportPar: '确认导出{num}条数据吗?',
    edit: '编辑',
    warning: '警告',
    error: '错误',
    detail: '详情',
    index: '序号',
    keywordSearch: '请输入关键词搜索',
    logout: '退出登录',
    logoutConfirm: '确认退出登录吗？',
    updatePassword: '修改密码',
    changePassword: '修改密码',
    lookForward: '敬请期待',
    modify: '修改',
    modifySuccess: '修改成功',
    noData: '无数据',
    operate: '操作',
    pleaseCheckValue: '请检查输入的值是否合法',
    refresh: '刷新',
    reset: '重置',
    search: '搜索',
    switch: '切换',
    tip: '提示',
    trigger: '触发',
    update: '更新',
    updateSuccess: '更新成功',
    updateFailed: '更新失败',
    downloadFail: '文件下载失败',
    success: '成功',
    fail: '失败',
    stop: '停止',
    confirmStop: '确认停止吗？',
    execute: '执行',
    copy: '复制',
    batchList: '批次',
    resume: '恢复',
    pause: '暂停',
    finish: '完成',
    running: '运行中',
    operateSuccess: '操作成功',
    operateFailed: '操作失败',
    executeSuccess: '执行成功',
    executeFailed: '执行失败',
    confirmExecute: '确认执行吗？',
    confirmResume: '确认恢复吗？',
    confirmPause: '确认暂停吗？',
    confirmFinish: '确认完成吗？',
    log: '日志',
    idDetailTip: '点击 ID 查看详情',
    generateRandomly: '随机生成',
    active: '活跃',
    yesOrNo: {
      yes: '是',
      no: '否'
    },
    status: {
      enable: '启用',
      disable: '禁用'
    },
    systemTaskType: {
      callback: '回调任务',
      job: '定时任务',
      workflow: '工作流'
    },
    routeKey: {
      routeLabel: '路由策略',
      routeForm: '请选择路由策略',
      items: {
        consistentHash: '一致性哈希',
        random: '随机',
        lru: 'LRU',
        round: '轮询',
        first: '第一个',
        last: '最后一个'
      }
    },
    blockStrategy: {
      label: '阻塞策略',
      form: '请选择阻塞策略',
      items: {
        discard: '丢弃',
        overwrite: '覆盖',
        parallel: '并行',
        recovery: '恢复'
      }
    },
    failStrategy: {
      items: {
        skip: '跳过',
        blockage: '阻塞'
      }
    },
    workFlowNodeStatus: {
      items: {
        open: '开启',
        close: '关闭'
      }
    },
    executorType: {
      label: '执行器类型',
      form: '请选择执行器类型',
      items: {
        java: 'Java',
        python: 'Python'
      }
    },
    taskType: {
      label: '任务类型',
      form: '请选择任务类型',
      items: {
        cluster: '集群',
        broadcast: '广播',
        slice: '静态分片',
        map: 'Map',
        mapreduce: 'MapReduce'
      }
    },
    triggerType: {
      label: '触发类型',
      form: '请选择触发类型',
      items: {
        cron: 'CRON表达式',
        fixed: '固定时间',
        workflow: '工作流'
      }
    },
    taskBatchStatus: {
      label: '执行状态',
      form: '请选择执行状态',
      items: {
        waiting: '待处理',
        running: '运行中',
        success: '处理成功',
        fail: '处理失败',
        stop: '任务停止',
        cancel: '取消',
        decisionFailed: '判定未通过',
        skip: '跳过'
      }
    },
    taskStatus: {
      label: '状态',
      form: '请选择状态',
      items: {
        running: '运行中',
        success: '处理成功',
        fail: '处理失败',
        stop: '任务停止',
        cancel: '取消'
      }
    },
    jobOperationReason: {
      label: '操作原因',
      form: '请选择执行状态',
      items: {
        none: '无',
        taskExecutionTimeout: '任务执行超时',
        notClient: '无客户端节点',
        closed: '任务已关闭',
        discard: '任务丢弃',
        overlay: '任务被覆盖',
        notExecutionTask: '无可执行任务项',
        taskExecutionError: '任务执行期间发生非预期异常',
        mannerStop: '手动停止',
        workflowConditionNodeExecutionError: '条件节点执行异常',
        jobTaskInterrupted: '任务中断',
        workflowCallbackNodeExecutionError: '回调节点执行异常',
        workflowNodeNoRequired: '无需处理',
        workflowNodeClosedSkipExecution: '节点关闭跳过执行',
        workflowDecisionFailed: '判定未通过'
      }
    },
    updateDt: '更新时间',
    createDt: '创建时间',
    today: '今天',
    lastWeek: '最近一周',
    currentMonth: '当月',
    lastMonth: '最近一月',
    lastTwoMonth: '最近两月'
  },
  request: {
    logout: '请求失败后登出用户',
    logoutMsg: '用户状态失效，请重新登录',
    logoutWithModal: '请求失败后弹出模态框再登出用户',
    logoutWithModalMsg: '用户状态失效，请重新登录',
    refreshToken: '请求的token已过期，刷新token',
    tokenExpired: 'token已过期'
  },
  theme: {
    themeSchema: {
      title: '主题模式',
      light: '亮色模式',
      dark: '暗黑模式',
      auto: '跟随系统'
    },
    grayscale: '灰色模式',
    colourWeakness: '色弱模式',
    layoutMode: {
      title: '布局模式',
      vertical: '左侧菜单模式',
      'vertical-mix': '左侧菜单混合模式',
      horizontal: '顶部菜单模式',
      'horizontal-mix': '顶部菜单混合模式',
      reverseHorizontalMix: '一级菜单与子级菜单位置反转'
    },
    recommendColor: '应用推荐算法的颜色',
    recommendColorDesc: '推荐颜色的算法参照',
    themeColor: {
      title: '主题颜色',
      primary: '主色',
      info: '信息色',
      success: '成功色',
      warning: '警告色',
      error: '错误色',
      followPrimary: '跟随主色'
    },
    scrollMode: {
      title: '滚动模式',
      wrapper: '外层滚动',
      content: '主体滚动'
    },
    page: {
      animate: '页面切换动画',
      mode: {
        title: '页面切换动画类型',
        'fade-slide': '滑动',
        fade: '淡入淡出',
        'fade-bottom': '底部消退',
        'fade-scale': '缩放消退',
        'zoom-fade': '渐变',
        'zoom-out': '闪现',
        none: '无'
      }
    },
    fixedHeaderAndTab: '固定头部和标签栏',
    header: {
      height: '头部高度',
      breadcrumb: {
        visible: '显示面包屑',
        showIcon: '显示面包屑图标'
      }
    },
    tab: {
      visible: '显示标签栏',
      cache: '缓存标签页',
      height: '标签栏高度',
      mode: {
        title: '标签栏风格',
        chrome: '谷歌风格',
        button: '按钮风格'
      }
    },
    sider: {
      inverted: '深色侧边栏',
      width: '侧边栏宽度',
      collapsedWidth: '侧边栏折叠宽度',
      mixWidth: '混合布局侧边栏宽度',
      mixCollapsedWidth: '混合布局侧边栏折叠宽度',
      mixChildMenuWidth: '混合布局子菜单宽度'
    },
    footer: {
      visible: '显示底部',
      fixed: '固定底部',
      height: '底部高度',
      right: '底部局右'
    },
    watermark: {
      visible: '显示全屏水印',
      text: '水印文本'
    },
    themeDrawerTitle: '主题配置',
    pageFunTitle: '页面功能',
    configOperation: {
      copyConfig: '复制配置',
      copySuccessMsg: '复制成功，请替换 src/theme/settings.ts 中的变量 themeSettings',
      resetConfig: '重置配置',
      resetSuccessMsg: '重置成功'
    }
  },
  route: {
    login: '登录',
    403: '无权限',
    404: '页面不存在',
    500: '服务器错误',
    'iframe-page': '外链页面',
    log: '日志',
    home: '首页',
    pods: '在线机器',
    namespace: '命名空间',
    group: '组管理',
    notify: '告警通知',
    notify_recipient: '通知人',
    notify_config: '通知配置',
    user: '用户管理',
    user_manager: '用户信息',
    vehicle: '车辆管理',
    vehicle_manager: '车辆信息',
    workflow: '工作流',
    workflow_task: '任务管理',
    workflow_batch: '执行批次',
    workflow_form: '工作流',
    workflow_form_copy: '复制工作流',
    workflow_form_batch: '工作流批次详情',
    workflow_form_detail: '工作流详情',
    workflow_form_edit: '编辑工作流',
    workflow_form_add: '新增工作流',
    job: '定时任务',
    job_task: '任务管理',
    job_batch: '执行批次',
    document: ""
  },
  page: {
    common: {
      upadteTime: '更新时间',
      createTime: '创建时间'
    },
    login: {
      common: {
        loginOrRegister: '登录 / 注册',
        userNamePlaceholder: '请输入用户名',
        phonePlaceholder: '请输入手机号',
        codePlaceholder: '请输入验证码',
        passwordPlaceholder: '请输入密码',
        confirmPasswordPlaceholder: '请再次输入密码',
        codeLogin: '验证码登录',
        login: '登录',
        confirm: '确定',
        back: '返回',
        validateSuccess: '验证成功',
        loginSuccess: '登录成功',
        welcomeBack: '欢迎回来，{userName} ！',
        codeTip: '拖动滑块完成拼图'
      },
      pwdLogin: {
        title: '密码登录',
        rememberMe: '记住我',
        forgetPassword: '忘记密码？',
        register: '注册账号',
        otherAccountLogin: '其他账号登录',
        otherLoginMode: '其他登录方式',
        superAdmin: '超级管理员',
        admin: '管理员',
        user: '普通用户'
      }
    },

    home: {
      Greeting: '{userName}，欢迎回来！',
      morningGreeting: '早安，{userName}，今天又是充满活力的一天！',
      bthGreeting: '上午好，{userName}，工作顺利吗，不要久坐，多起来走动走动哦！',
      noonGreeting: '中午好，{userName}，工作了一个上午，现在是午餐时间！',
      athGreeting: '下午好，{userName}，午后很容易犯困呢，是时候该打个盹了!',
      duskGreeting: '{userName}，傍晚了，窗外夕阳的景色很美丽呢，最美不过夕阳红~',
      eveningGreeting: '晚上好，{userName}，今天过得怎么样？请注意早点休息！',
      earlyMorningGreeting: '{userName}，已经这么晚了呀，早点休息吧，晚安~',
      jobTaskCount: '定时任务',
      userCount: '用户',
      jobTask: '定时任务',
      jobBatch: '任务批次',
      jobTaskTip: '成功率:总完成/总调度量',
      onlineServiceCount: '总在线机器',
      onlineServiceTip: '总在线机器:注册到系统的客户端和服务端之和',
      workflow: '工作流',
      workflowTip: '成功率:总完成/总调度量',
      machine: {
        type: {
          client: '客户端',
          server: '服务端'
        }
      },
      retryTab: {
        params: {
          day: '今日',
          week: '最近一周',
          month: '最近一月',
          year: '全年'
        },
        rank: {
          title: '失败总量排名',
          titleRetry: '任务总量排名'
        },
        task: {
          title: '任务汇总',
          groupName: '组名称',
          run: '运行中任务数',
          total: '总任务数'
        },
        pie: {
          title: '成功比例图'
        }
      }
    },
    pods: {
      title: '在线机器',
      nodeType: '类型',
      groupName: '组名称',
      hostId: 'Pod ID',
      hostIp: 'IP',
      hostPort: 'Port',
      consumerBuckets: '路径/组',
      updateDt: '更新时间',
      contextPath: '路径/组',
      form: {
        groupName: '请输入组名称'
      },
      type: {
        client: '客户端',
        server: '服务端'
      }
    },
    namespace: {
      title: '命名空间',
      name: '名称',
      keyword: '空间名称/唯一标识',
      uniqueId: '唯一标识(默认UUID)',
      form: {
        name: '请输入空间名称',
        keyword: '请输入空间名称/唯一标识',
        uniqueId: '请输入唯一标识',
        uniqueIdRule: '仅支持长度为:1~64位字符.格式为:数字、字母、下划线、短横线。'
      },
      addNamespace: '新增命名空间',
      editNamespace: '编辑命名空间'
    },
    groupConfig: {
      title: '组管理',
      detail: '组详情',
      namespaceId: '命名空间ID',
      groupName: '组名称',
      token: 'Token',
      groupStatus: '状态',
      idGeneratorMode: 'ID生成模式',
      version: '版本',
      groupPartition: '分区',
      initScene: '初始化场景',
      bucketIndex: 'Bucket',
      updateDt: '更新时间',
      description: '描述',
      commonConfig: '通用配置',
      retryConfig: '重试配置',
      form: {
        groupName: '请输入组名称',
        token: 'Token',
        groupStatus: '状态',
        description: '描述',
        idGeneratorMode: 'ID生成模式',
        groupPartition: '分区',
        initScene: '初始化场景',
        collapseCommon: '通用配置',
        collapseRetry: '重试配置',
        groupNameRule: '组名称: 仅支持长度为:1~64位字符.格式为:数字、字母、下划线、短横线。'
      },
      idMode: {
        idWorker: '雪花算法',
        segment: '号段模式'
      },
      addGroupConfig: '新增组管理',
      editGroupConfig: '编辑组管理',
      generateToken: '随机生成'
    },
    notifyConfig: {
      title: '告警通知列表',
      groupName: '组名称',
      businessName: '业务ID',
      notifyName: '通知名称',
      notifyStatus: '通知状态',
      notifyType: '通知类型',
      notifyScene: '通知场景',
      notifyThreshold: '通知阈值',
      description: '描述',
      notifyAttribute: '通知属性',
      retryScene: '重试场景',
      job: '定时任务',
      workflow: '工作流',
      form: {
        notifyName: '请输入通知名称',
        description: '请输入描述',
        notifyType: '请选择通知类型',
        notifyAttribute: '请求输入通知属性',
        notifyScene: '请选择通知场景',
        groupName: '请选择组名称',
        notifyThreshold: '请输入通知阈值',
        notifyStatus: '请选择状态',
        systemTaskType: '请选择任务类型',
        notifyRecipient: '请选择通知人',
        rateLimiterThreshold: '请选择阈值',
        sceneName: '请选择重试场景',
        jobName: '请选择定时任务',
        workflowName: '请选择工作流'
      },
      addNotifyConfig: '新增告警通知',
      editNotifyConfig: '编辑告警通知',
      systemTaskType: '任务类型',

      jobNotifyScene: {
        jobTaskError: '任务执行失败',
        jobClientError: '客户端执行失败',
        jobNoClientNodesError: '没有可执行的客户端节点'
      },
      workflowNotifyScene: {
        workflowClientError: '客户端执行失败',
        workNoClientNodesError: '没有可执行的客户端节点',
        workTaskError: '工作流任务执行失败'
      },
      notifyRecipient: '通知人信息',
      rateLimiterStatus: '限流状态',
      rateLimiterThreshold: '每秒限流阈值'
    },
    notifyRecipient: {
      title: '通知人列表',
      detail: '通知人详情',
      recipientName: '接收人名称',
      notifyType: '通知类型',
      notifyAttribute: '属性信息',
      description: '描述',
      form: {
        description: '请输入描述',
        notifyAttribute: '请输入属性信息',
        recipientName: '请输入接收人名称',
        notifyType: '请选择通知类型',
        dingDingAts: "请输入被{'@'}人手机号或钉钉号",
        weComAts: "请输入被{'@'}人企业微信用户id",
        larkAts: "请输入被{'@'}人open_id",
        webhookUrl: '请输入URL',
        secret: '请输入密钥',
        contentType: '请选择请求类型',
        applicationJson: 'application/json',
        applicationXWwwFormUrlencoded: 'application/x-www-form-urlencoded'
      },
      addNotifyRecipient: '新增通知接收人',
      editNotifyRecipient: '编辑通知接收人',
      ats: "{'@'}通知人",
      webhookUrl: '通知地址',
      secret: '密钥',
      tos: '通知人邮箱地址',
      dingDing: '钉钉',
      email: '邮箱',
      weCom: '企业微信',
      lark: '飞书',
      webhook: 'webhook',
      contentType: '请求类型'
    },
    workflow: {
      title: '工作流列表',
      workflowName: '工作流名称',
      groupName: '组名称',
      nextTriggerAt: '触发时间',
      workflowStatus: '状态',
      triggerType: '触发类型',
      triggerInterval: '间隔时长',
      executorTimeout: '超时时间',
      updateDt: '更新时间',
      form: {
        workflowName: '请输入工作流名称',
        groupName: '请输入组名称',
        workflowStatus: '请输入状态'
      },
      addWorkflow: '新增工作流',
      editWorkflow: '编辑工作流'
    },
    workflowBatch: {
      title: '工作流批次列表',
      workflowName: '工作流名称',
      groupName: '组名称',
      executionAt: '执行时间',
      taskBatchStatus: '状态',
      operationReason: '操作原因',
      createDt: '创建时间',
      form: {
        workflowName: '请输入工作流名称',
        taskBatchStatus: '请输入状态',
        groupName: '请输入组名称'
      },
      addWorkflowBatch: '新增工作流批次',
      editWorkflowBatch: '编辑工作流批次'
    },
    jobTask: {
      title: '定时任务列表',
      groupName: '组名称',
      ownerName: '负责人',
      jobName: '任务名称',
      argsStr: '方法参数',
      shardNum: 'reduce 分片数',
      argsType: '参数类型',
      nextTriggerAt: '触发时间',
      jobStatus: '状态',
      routeKey: '路由策略',
      executorType: '执行器类型',
      executorInfo: '执行器名称',
      triggerType: '触发类型',
      triggerInterval: '间隔时长',
      blockStrategy: '阻塞策略',
      executorTimeout: '超时时间(秒)',
      maxRetryTimes: '最大重试次数',
      retryInterval: '重试间隔',
      taskType: '任务类型',
      parallelNum: '并行数',
      bucketIndex: 'Bucket',
      description: '描述',
      updateDt: '更新时间',
      notifyId: '告警通知',
      form: {
        jobStatus: '请输入状态',
        ownerName: '请输入负责人名称',
        maxRetryTimes: '请输入最大重试次数',
        description: '请输入描述',
        triggerType: '请输入触发类型',
        jobName: '请输入任务名称',
        executorTimeout: '请输入超时时间',
        triggerInterval: '请输入间隔时长(秒)',
        triggerInterval_CRON: '请输入间隔时长',
        taskType: '请输入任务类型',
        parallelNum: '请输入并行数',
        bucketIndex: '请输入Bucket',
        executorType: '请输入执行器类型',
        executorInfo: '请输入执行器名称',
        routeKey: '请输入路由策略',
        blockStrategy: '请输入阻塞策略',
        argsType: '请输入参数类型',
        argsStr: '请输入方法参数',
        shardNum: '请输入 reduce 分片数',
        groupName: '请输入组名称',
        retryInterval: '请输入重试间隔',
        notifyId: '请输入选择告警配置'
      },
      addJobTask: '新增定时任务',
      editJobTask: '编辑定时任务',
      triggerTypeItem: {
        fixed: '固定时间',
        cron: 'CRON表达式',
        workflow: '工作流'
      },
      detail: '定时任务详情'
    },
    jobBatch: {
      title: '任务批次列表',
      groupName: '组名称',
      jobName: '任务名称',
      taskType: '任务类型',
      executorInfo: '执行器名称',
      executorType: '执行器类型',
      executionAt: '开始执行时间',
      duration: '执行时长(秒)',
      taskBatchStatus: '状态',
      operationReason: '操作原因',
      form: {
        groupName: '请输入组名称',
        jobName: '请输入任务名称',
        taskBatchStatus: '请输入状态'
      },
      detail: '执行批次详情',
      jobTask: {
        title: 'JobTask 列表',
        id: 'ID',
        groupName: '组名称',
        taskStatus: '状态',
        clientInfo: '地址',
        argsStr: '参数',
        resultMessage: '结果',
        retryCount: '重试次数',
        createDt: '开始执行时间'
      }
    },
    userManager: {
      title: '用户列表',
      username: '用户名',
      role: '角色',
      permissions: '权限',
      checkPassword: '确认密码',
      password: '密码',
      updatePassword: '更新密码',
      permissionList: '权限列表',
      oldPassword: '旧密码',
      newPassword: '新密码',
      form: {
        ownerName: '请选择负责人',
        role: '请输入角色',
        password: '请输入密码',
        username: '请输入用户名',
        checkPassword: '请输入确认密码',
        permissions: '请选择组',
        namespaceIds: '请选择命名空间',
        oldPassword: '请输入旧密码',
        newPassword: '请输入新密码'
      },
      addUser: '新增用户',
      editUser: '编辑用户',
      roleItem: {
        user: '普通用户',
        admin: '管理员'
      }
    },
    vehicleManager: {
      title: '车辆管理',
      vehicleName: '车名',
      vehicleParts: '部门',
      vehicleDriver: '驾驶人',
      vehicleStates: '状态',
      vehicleDispatchInfo: '调度信息',
      vehiclePersonCharge: '负责人',
      vehicleType: '类型',
      form: {
        vehicleName: '请输入车名',
        vehicleParts: '请选择部门',
        vehicleDriver: '请输入驾驶人',
        vehicleStates: '请选择车辆状态',
        vehicleDispatchInfo: '请输入调度信息',
        vehiclePersonCharge: '请输入负责人',
        vehicleType: '选择车辆类型'
      },
      addVehicle: '新增车辆管理',
      editVehicle: '编辑车辆管理',
      type: {
        Suv: '运动型多用途车',
        Mpv: '多功能车	',
        Sedan: '轿车',
        Coupe: '跑车',
        Supercar: '超跑',
        Jeep: '吉普车',
        Minivan: '小型面包车',
        StationWagon: '旅行车',
        Truck: '卡车',
        Bus: '客车',
        Hybrid: '混合动力车',
        EV: '电动车',
        Pickup: '皮卡'
      }
    },



    log: {
      title: '日志详情',
      view: '查看日志',
      info: '基本信息'
    },

  },
  workflow: {
    node: {
      priority: '优先级',
      task: {
        name: '任务',
        add: '添加任务',
        nodeName: '任务节点',
        conditionNodes: {
          nodeName: '任务 1'
        }
      },
      condition: {
        nodeName: '决策节点',
        conditionNodes: {
          nodeName: '条件',
          otherNodeName: '其他情况',
          otherTip: '该分支为系统默认创建，与其他分支互斥。只有当其他分支都无法运行时，才会运行该分支。',
          priority: '优先级',
          conditionTip: '请设置条件',
          logicalCondition: '判定逻辑',
          expressionType: '表达式类型',
          nodeExpression: '节点表达式',
          otherNodeTip: '如存在未满足其他分支条件的情况，则进入此分支'
        },
        addBranch: '添加条件'
      },
      callback: {
        nodeName: '回调通知',
        conditionNodes: {
          nodeName: '回调通知',
          contentType: '请求类型',
          webhookTip: '请配置回调通知'
        }
      },
      endNode: '流程结束',
      log: {
        title: '日志详情'
      }
    }
  },
  form: {
    required: '不能为空',
    userName: {
      required: '请输入用户名',
      invalid: '用户名格式不正确'
    },
    phone: {
      required: '请输入手机号',
      invalid: '手机号格式不正确'
    },
    pwd: {
      required: '请输入密码',
      invalid: '密码格式不正确，6-18位字符，包含字母、数字、下划线'
    },
    confirmPwd: {
      required: '请输入确认密码',
      invalid: '两次输入密码不一致'
    },
    code: {
      required: '请输入验证码',
      invalid: '验证码格式不正确'
    },
    email: {
      required: '请输入邮箱',
      invalid: '邮箱格式不正确'
    }
  },
  dropdown: {
    closeCurrent: '关闭',
    closeOther: '关闭其它',
    closeLeft: '关闭左侧',
    closeRight: '关闭右侧',
    closeAll: '关闭所有'
  },
  icon: {
    themeConfig: '主题配置',
    themeSchema: '主题模式',
    lang: '切换语言',
    fullscreen: '全屏',
    fullscreenExit: '退出全屏',
    magnify: '放大',
    restore: '还原',
    reload: '刷新页面',
    collapse: '折叠菜单',
    expand: '展开菜单',
    pin: '固定',
    unpin: '取消固定',
    namespace: '切换命名空间'
  },
  datatable: {
    itemCount: '共 {total} 条'
  }
};

export default local;
