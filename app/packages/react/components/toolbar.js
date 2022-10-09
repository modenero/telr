import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';

class F7Toolbar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.__reactRefs = {};

    this.state = (() => {
      const self = this;
      const $f7 = self.$f7;

      if (!$f7) {
        self.$f7ready(() => {
          self.setState({
            _theme: self.$theme
          });
        });
      }

      return {
        _theme: $f7 ? self.$theme : null
      };
    })();

    (() => {
      Utils.bindMethods(this, ['onHide', 'onShow']);
    })();
  }

  onHide(navbarEl) {
    if (this.eventTargetEl !== navbarEl) return;
    this.dispatchEvent('toolbar:hide toolbarHide');
  }

  onShow(navbarEl) {
    if (this.eventTargetEl !== navbarEl) return;
    this.dispatchEvent('toolbar:show toolbarShow');
  }

  hide(animate) {
    const self = this;
    if (!self.$f7) return;
    self.$f7.toolbar.hide(this.refs.el, animate);
  }

  show(animate) {
    const self = this;
    if (!self.$f7) return;
    self.$f7.toolbar.show(this.refs.el, animate);
  }

  render() {
    const self = this;
    const props = self.props;
    const {
      id,
      style,
      className,
      inner,
      tabbar,
      labels,
      scrollable,
      hidden,
      noShadow,
      noHairline,
      noBorder,
      topMd,
      topIos,
      topAurora,
      top,
      bottomMd,
      bottomIos,
      bottomAurora,
      bottom,
      position
    } = props;
    const theme = self.state._theme;
    const classes = Utils.classNames(className, 'toolbar', {
      tabbar,
      'toolbar-bottom': theme && theme.md && bottomMd || theme && theme.ios && bottomIos || theme && theme.aurora && bottomAurora || bottom || position === 'bottom',
      'toolbar-top': theme && theme.md && topMd || theme && theme.ios && topIos || theme && theme.aurora && topAurora || top || position === 'top',
      'tabbar-labels': labels,
      'tabbar-scrollable': scrollable,
      'toolbar-hidden': hidden,
      'no-shadow': noShadow,
      'no-hairline': noHairline || noBorder
    }, Mixins.colorClasses(props));
    return React.createElement('div', {
      id: id,
      style: style,
      ref: __reactNode => {
        this.__reactRefs['el'] = __reactNode;
      },
      className: classes
    }, this.slots['before-inner'], inner ? React.createElement('div', {
      className: 'toolbar-inner'
    }, this.slots['default']) : this.slots['default'], this.slots['after-inner']);
  }

  componentWillUnmount() {
    const self = this;
    const {
      el
    } = self.refs;
    if (!el || !self.$f7) return;
    const f7 = self.$f7;
    f7.off('toolbarShow', self.onShow);
    f7.off('toolbarHide', self.onHide);
    self.eventTargetEl = null;
    delete self.eventTargetEl;
  }

  componentDidMount() {
    const self = this;
    const {
      el
    } = self.refs;
    if (!el) return;
    self.$f7ready(f7 => {
      self.eventTargetEl = el;
      if (self.props.tabbar) f7.toolbar.setHighlight(el);
      f7.on('toolbarShow', self.onShow);
      f7.on('toolbarHide', self.onHide);
    });
  }

  componentDidUpdate() {
    const self = this;

    if (self.props.tabbar && self.$f7) {
      self.$f7.toolbar.setHighlight(self.refs.el);
    }
  }

  get slots() {
    return __reactComponentSlots(this.props);
  }

  dispatchEvent(events, ...args) {
    return __reactComponentDispatchEvent(this, events, ...args);
  }

  get refs() {
    return this.__reactRefs;
  }

  set refs(refs) {}

}

__reactComponentSetProps(F7Toolbar, Object.assign({
  id: [String, Number],
  className: String,
  style: Object,
  tabbar: Boolean,
  labels: Boolean,
  scrollable: Boolean,
  hidden: Boolean,
  noShadow: Boolean,
  noHairline: Boolean,
  noBorder: Boolean,
  position: {
    type: String,
    default: undefined
  },
  topMd: {
    type: Boolean,
    default: undefined
  },
  topIos: {
    type: Boolean,
    default: undefined
  },
  topAurora: {
    type: Boolean,
    default: undefined
  },
  top: {
    type: Boolean,
    default: undefined
  },
  bottomMd: {
    type: Boolean,
    default: undefined
  },
  bottomIos: {
    type: Boolean,
    default: undefined
  },
  bottomAurora: {
    type: Boolean,
    default: undefined
  },
  bottom: {
    type: Boolean,
    default: undefined
  },
  inner: {
    type: Boolean,
    default: true
  }
}, Mixins.colorProps));

F7Toolbar.displayName = 'f7-toolbar';
export default F7Toolbar;