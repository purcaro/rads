import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/psoriasis.jpg" floated='left' />
	    <h3>Psoriatic Arthritis</h3>
	    <p>One of the seronegative spondyloarthropathies, a form of inflammatory arthritis associated with psoriasis.</p>
	    <h3>Distribution:</h3>
	    <p>Psoriatic arthritis is an asymmetric process primarily with distal involvement of the hands. There are five different patterns of psoriatic arthropathy which are described in the following section. It is important to note that patients will usually exhibit findings which include more that one of these subsets. </p>
	    <h3>Radiographic Appearance:</h3>
	    <p>Erosions will usually begin at the peripheral articular surfaces and extend centrally. Fluffy bone periostitis and erosions at the interphalangeal joints can create an appearance which resembles &quot;mouse ears&quot;. </p>
	<p>As previously mentioned, there are five different patterns of psoriatic arthritis. Classic psoriatic arthritis or DIP arthritis, involves the distal digits with associated fingernail pathology. Resorption of the distal phlangeal tufts can often be seen; this is a process called acroosteolysis. Arthritis mutilans, is a very destructive form of psoriatic arthritis with significant periarticular bone resorption. The erosions can cause a &quot;pencil in cup&quot; deformity where one articular surface is eroded creating a pointed appearance; the articulating bone can be concave, resembling an upside down cup. Symmetric polyarthropathy, can strongly resemble rheumatoid arthritis with erosions and ankylosis of the interphalangeal joints. Asymmetrical oligoarthritis, has the appearance of soft tissue swelling of a single phalanx known as a &quot;sausage digit&quot;. The fifth and last pattern exhibits findings similar to ankylosing spondylitis with spinal sendesmophytes which occur in an asymmetric distribution. This is associated with sacroilitis which will usually present in an asymmetric 
	and unilateral pattern.</p>

	<h3>Differential Diagnosis:</h3>
	    <p>Radiographic findings of the hand in an asymmetrical distribution distally without periarticular osteoporosis can help to differentiate psoriatic arthritis from rheumatoid arthritis. Overlapping patterns of the two disease processes can often make it difficult to distinguish one from the other. Furthermore, a patient can concurrently have psoriatic and rheumatoid arthritis. Reiter's syndrome can be distinguished from psoriatic arthritis by its tendency to involve only the articulations of the lower extremities.
	    </p>
	</Tab.Pane> },

    { menuItem: 'Distribution', render: () =>
	<Tab.Pane>
	    <Image src="orig/Handwrist500.gif" floated="left" /> 
  <table border="1">
    <tr> 
      <th width="200" class="joint">Joint</th>
      <th width="100" class="joint">Frequency</th>
      <th>&nbsp;</th>
    </tr>
    <tr> 
      <td class="joint">DIP</td>
      <td class="freq">+++</td>
      <td><Image src="orig/psoriasisdip.jpg" width="106" height="100" /></td>
    </tr>
    <tr> 
      <td class="joint">1st IP</td>
      <td class="freq">+++</td>
      <td><Image src="orig/psoriaisipfusion.jpg" width="89" height="100" /></td>
    </tr>
    <tr> 
      <td class="joint">2nd-5th PIP</td>
      <td class="freq">+++</td>
      <td><Image src="orig/psoriasispip.jpg" width="111" height="100" /></td>
    </tr>
    <tr> 
      <td class="joint">1st MCP</td>
      <td class="freq">+++</td>
      <td><Image src="orig/psoriasis1stmcp.jpg" width="108" height="100" /></td>
    </tr>
    <tr> 
      <td class="joint">2nd-5th MCP</td>
      <td class="freq">++</td>
      <td><Image src="orig/psoriasismcp.jpg" width="110" height="100" /></td>
    </tr>
    <tr> 
      <td class="joint">1st CMC</td>
      <td class="freq">++</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">2-5 CMC</td>
      <td class="freq">++</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">Midcarpal</td>
      <td class="freq">++</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">Radiocarpal</td>
      <td class="freq">++</td>
      <td>&nbsp;</td>
    </tr>
    <tr> 
      <td class="joint">Radioulnar</td>
      <td class="freq">++</td>
      <td>&nbsp;</td>
    </tr>
  </table>
	</Tab.Pane> },
    { menuItem: 'Links', render: () =>
	<Tab.Pane>
  <h3>Similar cases on the Internet</h3>
  <ol class="linklist">
    <li>Indiana University<br />
      <a href="http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set1/case2/page.htm">http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set1/case2/page.htm</a></li>
    <li>Faculté de Médecine de Rennes<br />
      <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1609">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1609</a></li>
    <li>gentili.net<br />
      <a href="33.htm">http://www.gentili.net/signs/33.htm</a> 
    </li>
  </ol>

	</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>
    <ol class="reflist">
      <li>Rahman P, Gladman DD, Cook RJ, Zhou Y, Young G, Salonen D.<br />
        <b>Radiological assessment in psoriatic arthritis.</b><br />
        <i>Br J Rheumatol. 1998 Jul;37(7):760-5.</i><br />
      </li>
    </ol>

	</Tab.Pane> },
    
]

const Psoriasis = () => <Tab panes={panes} />

export default Psoriasis
