import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';
var ReactDOM = require('react-dom');
let  oo1 = '■';
let beh8 = '□';

class 線上組字 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      組字式: this.props.組字式 || '',
    };
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.nameInput).focus();
  }

  改組字式(textarea)
  {
    let 組字式 = textarea.target.value;
    this.setState({ 組字式: 組字式 });
  }

  組字圖片網址(組字式, 字體='宋體')
  {
    return `http://xn--p8s937b.xn--v0qr21b.xn--kpry57d/${組字式}.png?%E5%AD%97%E9%AB%94=${字體}`;
  }

  幾字() {
    let { 組字式 } = this.state;
    let num = 0;
    let i = 0;
    while (i < 組字式.length && num < 1) {
      if (this.是組合符號無(組字式[i])) {
        num--;
      } else {
        num++;
      }

      i++;
    }

    return num;
  }

  補烏組字式()
  {
    let 幾字 = this.幾字();
    let 烏組字式 = this.state.組字式;
    if (幾字 < 1) {
      烏組字式 += oo1;
      幾字++;
    }

    while (幾字 < 1) {
      烏組字式 += beh8;
      幾字++;
    }

    return 烏組字式;
  }

  補白組字式()
  {
    let 幾字 = this.幾字();
    let 白組字式 = this.state.組字式;
    while (幾字 < 1) {
      白組字式 += beh8;
      幾字++;
    }

    return 白組字式;
  }

  是組合符號無(ji7) {
    switch (ji7) {
    case '⿰':
    case '⿱':
    case '⿲':
    case '⿳':
    case '⿴':
    case '⿵':
    case '⿶':
    case '⿷':
    case '⿸':
    case '⿹':
    case '⿺':
    case '⿻':
    case '⿿':
      return true;
  }
    return false;
  }

  render () {
    let { 組字式 } = this.state;
    return (
       <div className="huainn5">
        <article>
          <section id="線上組字" className="font22px">
            <header>線上組字<hr /></header> 
            <table><tbody>
            <tr>
              <td>
                <div id="too5tsip8">
                  <img id="hian2si7too5it4" src={this.組字圖片網址(this.補烏組字式())}/>
                  <img id="hian2si7too5ji7" src={this.組字圖片網址(this.補白組字式())}/>
                </div>
              </td>
              <td>
                  {組字式}<br/>
                sang3tsut4su1jip8()<br/>
                {this.組字圖片網址(組字式)}
                <textarea id='組字式輸入' ref="組字式輸入"
                  defaultValue={組字式} onKeyUp={this.改組字式.bind(this)}></textarea>
              </td>
            </tr>
            </tbody></table>
            
            <br />
            <table className="鍵盤"><tbody>
              <tr><td>
              一般符號：
                </td><td>
            注音符號： 
              <input className="tsoo2ji7liu2a2" type="button" value="{{ 字 }}"
               onClick={this.addTextonInputSelection.bind(this, 'a')} />
                  <br/>
              </td><td>
              
            </td></tr></tbody></table>
            <br />

         
              <script type="text/javascript">
              tsit8khai1si2();
              </script>
              <br/>
            </section>
            
          </article>
        </div>
     );
  }

  addTextonInputSelection(value) {
    let field = document.getElementById('組字式輸入');
    let sel = this.getInputSelection(field);
    this.insertAtCursor(field, value);
    this.setInputSelection(field, sel.start + value.length, sel.end +  value.length);
  }

  // tui2 http://snipplr.com/view/1384/insertatcursor/
  getInputSelection(el) {
    let start = 0;
    let end = 0;

    if (typeof el.selectionStart == 'number'
        && typeof el.selectionEnd == 'number') {
      start = el.selectionStart;
      end = el.selectionEnd;
    } else {
      let  range = document.selection.createRange();

      if (range && range.parentElement() == el) {
        let len = el.value.length;
        let normalizedValue = el.value.replace(/\r\n/g, '\n');

        // Create a working TextRange that lives only in the input
        let  textInputRange = el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        let  endRange = el.createTextRange();
        endRange.collapse(false);

        if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
          start = end = len;
        } else {
          start = -textInputRange.moveStart('character', -len);
          start += normalizedValue.slice(0, start).split('\n').length - 1;

          if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
            end = len;
          } else {
            end = -textInputRange.moveEnd('character', -len);
            end += normalizedValue.slice(0, end).split('\n').length - 1;
          }
        }
      }
    }

    return {
      start: start,
      end: end,
    };
  }

  // tui2
  // http://stackoverflow.com/questions/3286595/update-textarea-value-but-keep-cursor-position
  insertAtCursor(myField, myValue) {

    // IE support
    if (document.selection) {
      myField.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
    }

    // MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      myField.value = myField.value.substring(0, startPos) + myValue
          + myField.value.substring(endPos, myField.value.length);
    } else {
      myField.value += myValue;
    }
  }

  offsetToRangeCharacterMove(el, offset) {
    return offset - (el.value.slice(0, offset).split('\r\n').length - 1);
  }

  setInputSelection(el, startOffset, endOffset) {
    if (typeof el.selectionStart == 'number'
        && typeof el.selectionEnd == 'number') {
      el.selectionStart = startOffset;
      el.selectionEnd = endOffset;
    } else {
      let range = el.createTextRange();
      let startCharMove = offsetToRangeCharacterMove(el, startOffset);
      range.collapse(true);
      if (startOffset == endOffset) {
        range.move('character', startCharMove);
      } else {
        range.moveEnd('character',
            offsetToRangeCharacterMove(el, endOffset));
        range.moveStart('character', startCharMove);
      }

      range.select();
    }
  }
}

export default Transmit.createContainer(線上組字, { queries: {} });
