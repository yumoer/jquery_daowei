### 1.animation媒体查询兼容
    调用：
    animation: show 1s ease;
    设置：
    @-moz-keyframes show {
      from {
        transform: translateY(-100%) rotateX(90deg);
      }
      to {
        transform: translateY(0) rotateX(0);
      }
    }
    @-webkit-keyframes show {
      from {
        transform: translateY(-100%) rotateX(90deg);
      }
      to {
        transform: translateY(0) rotateX(0);
      }
    }
    @-o-keyframes show {
      from {
        transform: translateY(-100%) rotateX(90deg);
      }
      to {
        transform: translateY(0) rotateX(0);
      }
    }
    @keyframes show {
      from {
        transform: translateY(-100%) rotateX(90deg);
      }
      to {
        transform: translateY(0) rotateX(0);
      }
    }