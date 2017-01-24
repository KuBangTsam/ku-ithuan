import React from 'react';
import { Container, Divider, Segment, Header, Icon, Menu, Message, Rail, Table } from 'semantic-ui-react';

export default class 閩客故事 extends React.Component {

  render () {
    return (
      <Container text>
        <Segment basic textAlign="center" size="large">
        <Menu vertical compact size="large">
          <Menu.Item href='#閩客語有文字' target='_self'>閩客語有文字？</Menu.Item>
          <Menu.Item href="#廣韻" target='_self'>廣韻：揭開漢語方言的演化史</Menu.Item>
          <Menu.Item href="#閩南語的後" target='_self'>閩南語「後」沒有ㄏ</Menu.Item>
        </Menu>
        </Segment>

        <Header id="閩客語有文字" as='h3' attached='top' block>
          <Icon name='fire' />
          <Header.Content>
            閩客語有文字？
          </Header.Content>
        </Header>
        <Segment basic size="large">
          <p>來念看看這三個字</p>

           <Message warning attached><Icon name='info' />沒有標聲調</Message>
           <Table striped unstackable attached>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>範例字</Table.HeaderCell>
                <Table.HeaderCell>華語</Table.HeaderCell>
                <Table.HeaderCell>閩南語</Table.HeaderCell>
                <Table.HeaderCell>客家四縣腔</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row verticalAlign='top'>
                <Table.Cell>狗</Table.Cell>
                <Table.Cell>ㄍ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell>ㄍ<span style={{ color: 'green' }}>ㄠ</span></Table.Cell>
                <Table.Cell>ㄍ<span style={{ color: 'red' }}>ㄝㄨ</span></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>頭</Table.Cell>
                <Table.Cell>ㄊ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell>ㄊ<span style={{ color: 'green' }}>ㄠ</span></Table.Cell>
                <Table.Cell>ㄊ<span style={{ color: 'red' }}>ㄝㄨ</span></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>後</Table.Cell>
                <Table.Cell>ㄏ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell> <span style={{ color: 'green' }}>ㄠ</span></Table.Cell>
                <Table.Cell>ㄏ<span style={{ color: 'red' }}>ㄝㄨ</span></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <br/>
          <p>為什麼狗、頭、後在各個語言都有押韻呢？</p>
          <p>因為狗、頭、後在古代漢語是押韻的，可以推測從古代漢語分化成國閩客三種方言後，狗、頭、後仍然互相押韻。</p>
          <p>換句話說，國閩客語繼承了古代漢語的押韻規律，所以推論：閩南語及客家話和華語一樣也繼承了漢字。</p>
          <p>不過，部份詞彙原來是沒有漢字的。
             例如閩南語當中對男生女生稱呼為查甫和查某的「查」起源自壯侗語，
             閩南祖先從中原移居到閩越地區時，和相對多數的壯苗族裔通婚才加上的字
             <span className="pai5huainn5">[1]</span>。</p>
          
        </Segment>

        
        <Header id="廣韻" as='h3' attached='top' block>
          <Icon name='fire' />
          <Header.Content>
            廣韻：揭開漢語方言的演化史
          </Header.Content>
        </Header>
        <Segment basic size="large">
            <p>《廣韻》是現今保存最完整的、最古老的、也是最重要的一部韻書。</p>
            <p>韻書是一種按韻編排的字典，用來查哪些字押韻。現代的學者可以依據《廣韻》確知隋唐時期中古語音的聲母、韻母及聲調情況，進而上推古音（秦漢前）、下證今音（清末後）<span className="pai5huainn5">[3]</span>。
            </p>
            <p>當時為什麼要寫這本書呢？《廣韻》前序有寫，當年考詩詞遇到一個問題，就是考生說各自家鄉的方言，寫的是家鄉方言的韻字。例如：</p>
            <Table striped unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>範例字</Table.HeaderCell>
                <Table.HeaderCell>華語</Table.HeaderCell>
                <Table.HeaderCell>閩南語</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row verticalAlign='top'>
                <Table.Cell>詩</Table.Cell>
                <Table.Cell>ㄕ</Table.Cell>
                <Table.Cell>ㄒㄧ</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>師</Table.Cell>
                <Table.Cell>ㄕ</Table.Cell>
                <Table.Cell>ㄙㄨ</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>斯</Table.Cell>
                <Table.Cell>ㄙ</Table.Cell>
                <Table.Cell>ㄙㄨ</Table.Cell>
              </Table.Row>
            </Table.Body>
            </Table>
            
            <p>一位考生用華語寫詩，會認為師跟詩有押韻，但是另外一位考生寫閩南語的詩，則會認為詩跟師不押韻，於是用詩跟斯押韻。這怎麼辦呢？這兩位考生算不算押對韻？為避免爭執考試結果，也讓大家更方便查找韻字，所以朝廷下令撰寫《廣韻》做為科舉考試的標準。</p>
            <p>
              當時因為詩、師、斯不是在每個方言都有押韻，所以《廣韻》將這三個字分別分成三個韻「脂、之、支」。
              所以《廣韻》有三個韻，並不代表某個方言同時有這三個韻，它只代表在眾多方言中有三種狀況，換句話說《廣韻》是方言的總和而非一個語言。《廣韻》有兩百多個韻，三四十個聲母，一般方言聲韻不可能如此複雜，這也驗證《廣韻》並不是一個真實的語言。
            </p>
            <p></p>
            <Message warning>
            <Icon name='info' />
            前一節提到狗、頭、後<br/>
            從《廣韻》來佐證這三個字同屬「侯韻」，遵循侯韻從中古音分化成國閩客的韻母，才會使這三個字在國閩客語都押韻。
            <Table striped unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>範例字</Table.HeaderCell>
                <Table.HeaderCell>華語</Table.HeaderCell>
                <Table.HeaderCell>閩南語</Table.HeaderCell>
                <Table.HeaderCell>客家四縣腔&nbsp;（沒有標聲調）</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row verticalAlign='top'>
                <Table.Cell>狗</Table.Cell>
                <Table.Cell>ㄍ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell>ㄍ<span style={{ color: 'green' }}>ㄠ</span></Table.Cell>
                <Table.Cell>ㄍ<span style={{ color: 'red' }}>ㄝㄨ</span></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>頭</Table.Cell>
                <Table.Cell>ㄊ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell>ㄊ<span style={{ color: 'green' }}>ㄠ</span></Table.Cell>
                <Table.Cell>ㄊ<span style={{ color: 'red' }}>ㄝㄨ</span></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>後</Table.Cell>
                <Table.Cell>ㄏ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell> <span style={{ color: 'green' }}>ㄠ</span></Table.Cell>
                <Table.Cell>ㄏ<span style={{ color: 'red' }}>ㄝㄨ</span></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
            </Message>
            

            <p>再舉個有趣的例子：</p>
            <Message warning attached><Icon name='info' />沒有標聲調</Message>
            <Table striped unstackable attached>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>範例字</Table.HeaderCell>
                <Table.HeaderCell>華語</Table.HeaderCell>
                <Table.HeaderCell>閩南語</Table.HeaderCell>
                <Table.HeaderCell>客家四縣腔</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row verticalAlign='top'>
                <Table.Cell>狗</Table.Cell>
                <Table.Cell>ㄍ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell>ㄍㄠ</Table.Cell>
                <Table.Cell>ㄍㄝㄨ</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>手</Table.Cell>
                <Table.Cell>ㄕ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell>ㄑㄧㄨ</Table.Cell>
                <Table.Cell>ㄙㄨ</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>周</Table.Cell>
                <Table.Cell>ㄓ<span style={{ color: 'blue' }}>ㄡ</span></Table.Cell>
                <Table.Cell>ㄐㄧㄨ</Table.Cell>
                <Table.Cell>ㄗㄨ</Table.Cell>
              </Table.Row>
            </Table.Body>
            </Table>
            <br/>
            <p>狗、手、周在華語押韻，為什麼在閩客語卻沒有押韻呢？</p>
            <p>原來手和周在《廣韻》屬於「尤韻」，閩客語保留了手周的尤韻，所以手周在閩客語當然不會按照侯韻的演變方式！
              不過宋朝以後華語的尤韻和侯韻合流了，所以才會造成這三個字在華語押韻，但不在閩客語押韻的有趣現象。</p>
            <p>其它還有很多很多有趣的推論，都是由《廣韻》提供學者們重要佐證，所以說《廣韻》不只是當年讓文人作詩的工具書，更是現今學者研究漢語音韻史、研究當代漢語方言不可缺少的典籍。</p>
         </Segment>

      
        <Header as='h3' attached='top' block>
          <Icon name='fire' />
          <Header.Content>
            閩南語「後」沒有ㄏ音
          </Header.Content>
        </Header>
        <Segment id="閩南語的後" name='閩南語的後' basic size="large">
          <p>
            查考其他方言，只有閩南語的「後」沒有ㄏ音，大多數方言的「後」是有ㄏ的。</p>
          <p>以語音學的角度，ㄏ音不太可能無中生有。因此我們推測，閩語「後」的ㄏ是因為在講不清楚或聽不清楚的口耳相傳中漸漸遺落的，這成為閩語一個創新的特徵。</p>
          <p>閩籍祖先是由不同時期不同地點而來，又受到唐宋科舉讀書音的影響，造就了四個漢語語言層次，及文白兩異讀。</p>
        </Segment>

        <Segment id="參考資料" basic size="large">
        <Divider/>
          <p>參考資料：</p>
          <p><span className="pai5huainn5">[1]</span>&nbsp;董忠司。<cite>臺灣閩南語概論講授資料彙編，頁3-4。</cite>民國八十五年，董忠司主編。</p>
          <p><span className="pai5huainn5">[2]</span>&nbsp;張秀平和王曉明，<cite>「影響中國的一百本書」，第九十八項。</cite></p>
          <p><span className="pai5huainn5">[3]</span>&nbsp;<a href='http://xiaoxue.iis.sinica.edu.tw/ccr'>古今音資料庫的簡介</a></p>
        </Segment>
      </Container>
    );
  }
}

