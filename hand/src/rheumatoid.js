import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/rasevere.jpg" floated='left' />
	    <Image src="orig/rauldev.jpg" floated='left' />
	    <h3>Rheumatoid Arthritis (RA)</h3>
	    <p>A chronic inflammatory disorder with primary effects on the synovial joints. Rheumatoid factor is present in approximately 80% of patients with RA; these patients usually have more severe disease features. 
	    Women are affected approximately 3 times more often than men.</p>
	    <h3>Distribution:</h3>
	    <p>This disease is a bilaterally symmetrical and polyarticular process. Commonly affected joints of the hand and wrist include the MCP, PIP, any of the wrist joints, and the distal ulna and radial styloid. The distal interphalangeal 
	    joints are rarely involved. </p>
	    <h3>Radiographic Appearance:</h3>
	    <p>The earliest signs of the disease process are periarticular soft tissue swelling due to effusion, tenosynovitis and edema. Joint spaces may actually widen in the early stages of RA. Periarticular osteopenia can also be seen. Early articular changes occur at the &quot;bare area&quot; of small joints, which are not covered by cartilage. These marginal erosions are often first seen at the 2nd and 3rd MCP and the 3rd PIP articulations.
	    </p>
	    <p>Advanced signs of RA include diffuse loss of joint space due to loss of cartilage. There can also be marginal or central erosions and severe joint deformities. Subluxations and dislocations may lead to ulnar deviation at the MCP joints and radial deviation at the radiocarpal articulations of the wrists. Erosive changes are also noted at the distal ulna and radial styloid. Joint deformities seen in RA include a Boutonniere deformity (flexion at the PIP joint and hyperextension at DIP joint) and a Swan-neck deformity (hyperextension at the PIP joint and flexion at the DIP joint). In severe cases, there may be radiographic findings 
	    of ankylosis at the proximal interphalangeal and metacarpophalangeal joints.</p>
	    <h3>Differential Diagnosis:</h3>
	    <p>The differential includes SLE and seronegative spondyloarthropathies such as ankylosing spondylitis, psoriatic arthritis, and Reiter's arthritis. The DIP joints are often not affected in RA. Furthermore, the radiographic findings of subchondral sclerosis and osteophytosis are often absent.
	    </p>

	</Tab.Pane> },

    { menuItem: 'Distribution', render: () =>
	<Tab.Pane>
	    <Image src="orig/ra500.gif" floated='left' /> 
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
		    <td class="freq">++</td>
		    <td><Image src="orig/rapip.jpg" width="115" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th PIP</td>
		    <td class="freq">++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">1st MCP</td>
		    <td class="freq">+++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th MCP</td>
		    <td class="freq">+++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">1st CMC</td>
		    <td class="freq">+++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">2-5 CMC</td>
		    <td class="freq">+++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">Midcarpal</td>
		    <td class="freq">+++</td>
		    <td rowspan="2"><Image src="orig/rawrist.jpg" width="147" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">Radiocarpal</td>
		    <td class="freq">+++</td>
		</tr>
		<tr> 
		    <td class="joint">Radioulnar</td>
		    <td class="freq">+++</td>
		    <td><Image src="orig/raru.jpg" width="91" height="100" /></td>
		</tr>
	    </table>
	</Tab.Pane> },
    { menuItem: 'Links', render: () =>
	<Tab.Pane>
  
  <h3>Similar cases on the Internet</h3>
  <ol class="linklist">
    <li> gentili.net<br />
      <a href="http://gentili.net/signs/21.htm">http://gentili.net/signs/21.htm</a></li>
    <li>Indiana University<br />
      <a href="http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set1/case1/page.htm">http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set1/case1/page.htm</a></li>
    <li>Faculté de Médecine de Rennes<br />
      <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B3328">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+3328</a></li>
  </ol>

	</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>
    <ol class="reflist">
      <li>Boini S, Guillemin F. Related Articles<br />
        Radiographic scoring methods as outcome measures in rheumatoid arthritis: 
        properties and advantages.<br />
        <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11502606&dopt=Abstract"><i>Ann 
        Rheum Dis. 2001 Sep;60(9):817-27</i></a>. Review. [<a href="http://ard.bmjjournals.com/cgi/content/full/60/9/817">Full 
        text</a>] <br />
        <br />
      </li>
      <li> Kirwan JR.<br />
        <b>Conceptual issues in scoring radiographic progression in rheumatoid 
        arthritis.</b><br />
        <i><a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10090190&dopt=Abstract">J 
        Rheumatol. 1999 Mar;26(3):720-5</a>. Review.</i><br />
        <br />
      </li>
    </ol>

	</Tab.Pane> },
    
]

const Rheumatoid = () => <Tab panes={panes} />

export default Rheumatoid
