import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/hemochromap.jpg" floated="left" />
	    <h3>Hemochromatosis</h3> 
	    <p>An inherited disorder where there is increase in total iron body stores. 
    This leads to deposition of iron in parenchymal tissues, eventually causing 
    functional impairment. Men are affected far more frequently than in women. 
	    Arthritic changes are seen in approximately half of the patients.</p>
	    
  <h3>Distribution:</h3>
	    <p>Commonly affected sites of the hands include the metacarpal heads, especially at the 2nd and 3rd metacarpophalangeal joints, and the interphalangeal and carpal joints. .</p>
  <h3>Radiographic Appearance:</h3>
	    <p>Osseous eburnation, joint space narowing, well-defined subchondral cysts, radial beak-like osteophytosis at the metacarpal heads, and osteoporosis are all radiographic findings which are frequently seen in this disease process. Chondrocalcinosis is seen in up to fifty percent of the cases, with a direct correlation noted between the amount of chondrocalcinosis and the degree of arthropathy.</p>
  <h3>Differential Diagnosis:</h3>
  <p>Soft tissues findings in the skin and hand help differentiate psoriatic arthritis from findings in hemochromatosis. There is more involvement of the distal joints in the hands with osteoarthritis. It may be difficult to differentiate hemochromatosis from rheumatoid arthritis based on radiographic findings; however, osteophytosis is rarely seen in RA. Greater propensity for the MCP joints with medial beak-like osteophytosis at the metacarpal heads and more widespread involvement of the carpal bones may help to differentiate hemochromatosis from idiopathic CPPD disease.</p>
	</Tab.Pane> },

    { menuItem: 'Distribution', render: () =>
	<Tab.Pane>
	    <Image src="orig/cppd500.gif" floated="left" />  
	    <table border="1">
    <tr> 
      <th width="200" class="joint">Joint</th>
      <th width="100" class="joint">Frequency</th>
      <th>&nbsp;</th>
    </tr>
    <tr> 
      <td class="joint">DIP</td>
      <td class="freq">-</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">1st IP</td>
      <td class="freq">-</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">2nd-5th PIP</td>
      <td class="freq">-</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">1st MCP</td>
      <td class="freq">-</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">2nd-5th MCP</td>
      <td class="freq">+++</td>
      <td><Image src="orig/hemocrommcp.jpg" width="88" height="100" align="left" /></td>
    </tr>
    <tr> 
      <td class="joint">1st CMC</td>
      <td class="freq">-</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">2-5 CMC</td>
      <td class="freq">-</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">Midcarpal</td>
      <td class="freq">-</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">Radiocarpal</td>
      <td class="freq">+++</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">Radioulnar</td>
      <td class="freq">-</td>
      <td>&nbsp;</td>
    </tr>
  </table>	    
	</Tab.Pane> },
    { menuItem: 'Links', render: () =>
	<Tab.Pane>
  <h3>Similar cases on the Internet</h3>
  <ol class="linklist">
    <li>Indiana University<br />
      <a href="http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set2/case3/page.htm">http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set2/case3/page.htm</a></li>
  </ol>

	</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>
    <ol class="reflist">
      <li>Axford JS.<br />
        <b>Rheumatic manifestations of haemochromatosis.</b><br />
        <i>Baillieres Clin Rheumatol. 1991 Aug;5(2):351-65.</i> Review.<br />
      </li>
      <li>Faraawi R, Harth M, Kertesz A, Bell D.<br />
        <b>Arthritis in hemochromatosis.</b><br />
        <i>J Rheumatol. 1993 Mar;20(3):448-52.</i><br />
      </li>
    </ol>

	</Tab.Pane> },
    
]

const Hemochromatosis = () => <Tab panes={panes} />

export default Hemochromatosis
