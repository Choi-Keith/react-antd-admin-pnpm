export const api = [
  {
    name: 'Ai',
    displayName: '云AI',
    permissions: [
      {
        name: 'Ai.ImageAnnotation',
        displayName: '标注训练',
        isGranted: true,
        isEnabled: true,
        children: [
          {
            name: 'Ai.ImageAnnotation.CreateBatch',
            displayName: '创建批次',
            isGranted: true,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.UpdateBatch',
            displayName: '编辑批次',
            isGranted: true,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.DeleteBatch',
            displayName: '删除批次',
            isGranted: true,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.CreateTraining',
            displayName: '创建训练',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.UpdateTraining',
            displayName: '编辑训练',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.Upload',
            displayName: '上传文件',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.DownloadFiles',
            displayName: '下载文件',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.DownloadResult',
            displayName: '下载模型',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.DeleteImage',
            displayName: '删除图片',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.UpdateAnnotation',
            displayName: '编辑标注',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ai.ImageAnnotation.UpdateLabel',
            displayName: '编辑标签',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Customer',
    displayName: '客户管理',
    permissions: [
      {
        name: 'AbpTenantManagement.Tenants',
        displayName: '客户列表',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'AbpTenantManagement.Tenants.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'AbpTenantManagement.Tenants.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Feature.Management',
            displayName: '订阅功能',
            isGranted: false,
            isEnabled: true,
            children: [
              {
                name: 'Feature.Management.Setting',
                displayName: '编辑',
                isGranted: false,
                isEnabled: true,
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Agent.Management',
        displayName: '代理商列表',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Agent.Management.CreateRelation',
            displayName: '创建关系',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Agent.Management.DeleteRelation',
            displayName: '删除关系',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'DataVisualization',
    displayName: '首页大屏',
    permissions: [
      {
        name: 'DataVisualization.Vehicles',
        displayName: '车辆监控',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'DataVisualization.Vehicles.Status',
            displayName: '状态',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.Location',
            displayName: '位置',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.RealTimeInformation',
            displayName: '车辆实时信息',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.RunningStatistics',
            displayName: '运行',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.TroubleFreeOperationTime',
            displayName: '无故障运行时间',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.AvailabilityRate',
            displayName: '稼动率',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.RunningMileage',
            displayName: '运行里程',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.CompleteTask',
            displayName: '完成任务数',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.MeanTimeBetweenFailure',
            displayName: '平均故障间隔时间',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.PowerOnTime',
            displayName: '启停',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'DataVisualization.Vehicles.ElectricQuantity',
            displayName: '电量',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Maintenance',
    displayName: '保养管理',
    permissions: [
      {
        name: 'Maintenance.Plans',
        displayName: '保养策略',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Maintenance.Plans.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Maintenance.Plans.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Maintenance.Plans.Delete',
            displayName: '删除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
      {
        name: 'Maintenance.Maintain',
        displayName: '保养操作',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Maintenance.Maintain.Confirm',
            displayName: '确认保养',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Maintenance.Maintain.Terminate',
            displayName: '终止保养',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'MapSynchronization',
    displayName: '绘图同步',
    permissions: [
      {
        name: 'MapSynchronization.Map',
        displayName: '绘制图',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'MapSynchronization.Map.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'MapSynchronization.Map.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'MapSynchronization.Map.Delete',
            displayName: '删除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
      {
        name: 'MapSynchronization.Project',
        displayName: '项目',
        isGranted: false,
        isEnabled: true,
        children: [],
      },
      {
        name: 'MapSynchronization.Record',
        displayName: '绘图记录',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'MapSynchronization.Record.Create',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Ota',
    displayName: 'OTA管理',
    permissions: [
      {
        name: 'Ota.Packages',
        displayName: '更新包管理',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Ota.Packages.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ota.Packages.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ota.Packages.Delete',
            displayName: '删除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ota.Packages.Upload',
            displayName: '包文件上传',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
      {
        name: 'Ota.Missions',
        displayName: '任务管理',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Ota.Missions.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ota.Missions.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ota.Missions.Delete',
            displayName: '删除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ota.Missions.Publish',
            displayName: '发布',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ota.Missions.AddOrRemove',
            displayName: '选择设备',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Project',
    displayName: '项目管理',
    permissions: [
      {
        name: 'Project.Management',
        displayName: '项目列表',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Project.Management.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Project.Management.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Project.Management.Delete',
            displayName: '删除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'SkyVision',
    displayName: '天眼管理',
    permissions: [
      {
        name: 'SkyVision.Management',
        displayName: '天眼列表',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'SkyVision.Management.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'SkyVision.Management.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'SkyVision.Management.Delete',
            displayName: '删除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'System',
    displayName: '系统管理',
    permissions: [
      {
        name: 'AbpIdentity.Roles',
        displayName: '角色管理',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'AbpIdentity.Roles.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'AbpIdentity.Roles.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'AbpIdentity.Roles.Delete',
            displayName: '删除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'AbpIdentity.Roles.ManagePermissions',
            displayName: '分配权限',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
      {
        name: 'AbpIdentity.Users',
        displayName: '用户管理',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'AbpIdentity.Users.ManagePermissions',
            displayName: '分配权限',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'AbpIdentity.Users.Invite',
            displayName: '邀请用户',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
      {
        name: 'Ou.Management',
        displayName: '组织管理',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Ou.Management.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ou.Management.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ou.Management.Delete',
            displayName: '删除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ou.Management.AddMember',
            displayName: '添加用户',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ou.Management.AddDevice',
            displayName: '添加设备',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ou.Management.RemoveMember',
            displayName: '移除用户',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Ou.Management.RemoveDevice',
            displayName: '移除设备',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Device.Management.Bind',
            displayName: '绑定',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Vehicle',
    displayName: '车辆管理',
    permissions: [
      {
        name: 'Vehicle.Management',
        displayName: '车辆列表',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Vehicle.Management.Create',
            displayName: '新增',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Vehicle.Management.ResetPassword',
            displayName: '重置密码',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Vehicle.Management.Delete',
            displayName: '移除',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Vehicle.Management.ChangeCustomer',
            displayName: '转移',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Vehicle.Management.Return',
            displayName: '回退',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Vehicle.Management.Update',
            displayName: '编辑',
            isGranted: false,
            isEnabled: true,
            children: [
              {
                name: 'Vehicle.Management.Update.Acceptance',
                displayName: '交付验收（编辑验收时间）',
                isGranted: false,
                isEnabled: true,
                children: [],
              },
              {
                name: 'Vehicle.Management.Update.ExtendedWarranty',
                displayName: '质保延保（编辑质保时间）',
                isGranted: false,
                isEnabled: true,
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Vehicle.Troubleshoot',
        displayName: '故障监控',
        isGranted: false,
        isEnabled: true,
        children: [
          {
            name: 'Vehicle.Troubleshoot.Log',
            displayName: '实时日志',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Vehicle.Troubleshoot.Rosbag',
            displayName: 'Rosbag数据库',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
          {
            name: 'Vehicle.Troubleshoot.History',
            displayName: '历史故障',
            isGranted: false,
            isEnabled: true,
            children: [],
          },
        ],
      },
    ],
  },
];
