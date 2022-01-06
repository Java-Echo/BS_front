import ImageEditor from "@toast-ui/react-image-editor"
import 'tui-image-editor/dist/tui-image-editor.css'
import React,{Component} from 'react'
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
var customTheme = {
    "common.bi.image": "none",
    "common.bisize.width": "0",
    "common.bisize.height": "0",
    "common.backgroundImage": "dope",
    "common.backgroundColor": "#e8ffff",
    "common.border": "0px",
  
    // header
    "header.backgroundImage": "none",
    "header.backgroundColor": "transparent",
    "header.border": "0px",
  
    // load button
    "loadButton.backgroundColor": "#fff",
    "loadButton.border": "1px solid #ddd",
    "loadButton.color": "#222",
    "loadButton.fontFamily": "NotoSans, sans-serif",
    "loadButton.fontSize": "12px",
  
    // download button
    "downloadButton.backgroundColor": "#222",
    "downloadButton.border": "1px solid #222",
    "downloadButton.color": "#fff",
    "downloadButton.fontFamily": "NotoSans, sans-serif",
    "downloadButton.fontSize": "12px",
  
    // icons default
    "menu.normalIcon.color": "#8a8a8a",
    "menu.activeIcon.color": "#555555",
    "menu.disabledIcon.color": "#434343",
    "menu.hoverIcon.color": "#ff87b0",
    "submenu.normalIcon.color": "#8a8a8a",
    "submenu.activeIcon.color": "#ff87b0",
  
    "menu.iconSize.width": "24px",
    "menu.iconSize.height": "24px",
    "submenu.iconSize.width": "32px",
    "submenu.iconSize.height": "32px",
  
    // submenu primary color
    "submenu.backgroundColor": "#ffdcdb",
    "submenu.partition.color": "#222",
  
    // submenu labels
    "submenu.normalLabel.color": "#222",
    "submenu.normalLabel.fontWeight": "lighter",
    "submenu.activeLabel.color": "#222",
    "submenu.activeLabel.fontWeight": "lighter",
  
    // checkbox style
    "checkbox.border": "1px solid #ff87b0",
    "checkbox.backgroundColor": "#ff87b0",
  
    // rango style
    "range.pointer.color": "#fff",
    "range.bar.color": "#666",
    "range.subbar.color": "#d1d1d1",
  
    "range.disabledPointer.color": "#414141",
    "range.disabledBar.color": "#282828",
    "range.disabledSubbar.color": "#414141",
  
    "range.value.color": "#fff",
    "range.value.fontWeight": "lighter",
    "range.value.fontSize": "11px",
    "range.value.border": "1px solid #353535",
    "range.value.backgroundColor": "#151515",
    "range.title.color": "#fff",
    "range.title.fontWeight": "lighter",
  
    // colorpicker style
    "colorpicker.button.border": "1px solid #1e1e1e",
    "colorpicker.title.color": "#fff",
  };
export default class EditPic extends Component{
    constructor(props){
        super(props)
        this.setState({
            file: props.file,
            filename: props.name,
        })
    }
    // var whiteTheme = require('./js/theme/white-theme.js');
    render(){
        return(
            <Row type="flex" justify="center" align="middle" style={{minHeight:'0vh'}}> 
        <ImageEditor
        includeUI={{
        loadImage: {
            path: 'img/sampleImage.jpg',
            name: 'SampleImage'
        },
        theme: customTheme,
        menu: ['shape', 'filter'],
        initMenu: 'filter',
        uiSize: {
            width: '1000px',
            height: '700px'
        },
        menuBarPosition: 'bottom'
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70
    }}
    usageStatistics={true}
  />
  </Row>
        )
    }
}