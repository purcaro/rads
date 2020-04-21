import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/goutap.jpg" floated="left" />
	    <h3>Gout</h3>
	    <p>A group of disorders of purine metabolism which causes an excess of serum uric acid. Deposition of urate occurs in articular or extra-articular tissues. This excess of uric acid can be caused by over-production or under-excretion by the body. In both these types of patients, excessive intake of foods containing purines can contribute to hyperuricemia. Men are affected more often than women.
	    </p>
	    <h3>Distribution:</h3>
	    <p>While all of the compartments of the hand and wrist are susceptible, the carpometacarpal and intercarpal joints are the most frequently involved. Asymmetric distribution is characteristic of gouty arthritis. </p>
	    <h3>Radiographic Appearance:</h3>
	    <p>Periarticular soft tissue swelling may be the first radiographic sign of an acute gouty attack. Soft tissue sodium urate deposits can occur with chronic gout which creates a dense mass called a tophus that can occasionally contain calcifications. This distribution is random and is usually seen on the dorsal surfaces. Osseous erosions are periarticular with sharp sclerotic margins and an asymmetric distribution. Overhanging edges with a well-defined osseous shelf at the erosive site can sometimes be seen. Loss of normal bone mineralization is not a characteristic finding of gout and if present, the osteoporotic findings are mild. Joint space narrowing does not usually present except in more advanced stages.</p>
	    <h3>Differential Diagnosis:</h3>
	<p>Chronic gout may be mistaken for rheumatoid arthritis as the joint spaces narrow. However, in rheumatoid arthritis, joint involvement is symmetric, erosions do not have sclerotic margins, and juxta-articular osteoporosis may be present. Osteoarthritis may also be mistaken for gout and can also occur concurrently. </p>	    </Tab.Pane> },

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
		    <td class="freq">++</td>
		    <td><Image src="orig/goutdip.jpg" width="103" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">1st IP</td>
		    <td class="freq">++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th PIP</td>
		    <td class="freq">++</td>
		    <td><Image src="orig/goutpip.jpg" width="109" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">1st MCP</td>
		    <td class="freq">++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th MCP</td>
		    <td class="freq">++</td>
		    <td>&nbsp;</td>
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
		<li> eMedicine, Radiology section.<br />
		<a href="http://www.emedicine.com/radio/topic125.htm">http://www.emedicine.com/radio/topic313.htm</a></li>
		<li>Indiana University<br />
		<a href="http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set2/case1/page.htm">http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set2/case1/page.htm</a></li>
		<li>Faculté de Médecine de Rennes<br />
		    <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1592">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1592</a></li>
			<li>ACR<br />
			    <a href="http://www.acr.org/departments/educ/intrain/498-musculoskeletal.pdf%20">http://www.acr.org/departments/educ/intrain/498-musculoskeletal.pdf 
			    </a></li>
		    </ol>
		</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>
	    <ol class="reflist">
		<li>Bloch C, Hermann G, Yu TF.<br />
		    <b>A radiologic reevaluation of gout: a study of 2,000 patients.</b><br />
		    <i>AJR Am J Roentgenol. 1980 Apr;134(4):781-7.</i><br />
		</li>
		<li>Barthelemy CR, Nakayama DA, Carrera GF, Lightfoot RW Jr, Wortmann RL.<br />
		    <b>Gouty arthritis: a prospective radiographic evaluation of sixty patients.</b><br />
		<i>Skeletal Radiol. 1984;11(1):1-8.</i></li>
		<li>Bloch C, Hermann G, Yu TF.<br />
		    <b>A radiologic reevaluation of gout: a study of 2,000 patients.</b><br />
		<i>AJR Am J Roentgenol. 1980 Apr;134(4):781-7.</i></li>
		<li>Ray MJ, Bassett RL.<br />
		    <b>The radiologic manifestations of gout.</b><br />
		<i>Orthopedics. 1985 Jan;8(1):92, 95-8.</i> No abstract available</li>
		<li>Watt I, Middlemiss H.<br />
		    <b>The radiology of gout. Review article.</b><br />
		<i>Clin Radiol. 1975 Jan;26(1):27-36. </i>Review.</li>
	    </ol>

	</Tab.Pane> },
    
]

const Gout = () => <Tab panes={panes} />

export default Gout
