import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/OAP4191179.jpg" floated='left' />
	    <h3>Osteoarthritis (OA)</h3><p>Also known as degenerative joint disease (DJD), is a process of progressive deterioration of articular cartilage and formation of new bone (osteophytes) at the joint surface. Primary osteoarthritis is age related and associated with repetitive and/or high mechanical stress on a normal joint. Secondary osteoarthritis is due to an underlying cause such as trauma, inflammatory, metabolic, developmental, or connective tissue diseases. </p>
	    <h3>Distribution:</h3>
	    <p>Primary osteoarthritis of the hands typically targets the PIP, DIP,     scaphotrapeziotrapezoid and the 1st carpometacarpal joints. The knee, hip,     spinal, and 1st metatarsophalangeal joints are other areas which are commonly     involved. Additional joints can be affected in cases of secondary osteoarthritis.</p>
	    <h3>Radiographic Findings:</h3>
	    <p>Affected joint spaces are narrowed with reactive subchondral sclerosis (eburnation). Other classic radiographic findings include osteophytes and subchondral cysts. Heberden's nodes at the DIP joints and Bouchard's nodes at the PIP joints of the hands are areas of osteophyte formation and soft tissue swelling associated with osteoarthritis. Intraarticular loose bodies can also sometimes be seen. Erosive osteoarthritis is an inflammatory arthritis primarily seen in peri- and post-menopausal women; the distribution pattern in the hands is the same as in primary osteoarthritis. However, this process is associated with osteoporotic changes and erosions at the center of the involved articular surfaces which create a "gull-wing" deformity. </p>
	    <h3>Differential:</h3>
	    <p>Erosive osteoarthritis of the hands can sometimes be mistaken for psoriatic arthritis, rheumatoid arthritis, or hemochromatosis. The distinguishing feature which may help to differentiate erosive OA from the other diseases is its involvement of the 1st carpometacarpal (trapeziometacarpal) joint. Primary osteoarthritis can be differentiated from rheumatoid arthritis by its lack of marginal erosions, and uniformity in joint space narrowing at the small hand joints; furthermore, RA rarely involves the DIP joints. Conditions which are associated with secondary osteoarthritis will often have radiographic findings related to the primary process. This may include diseases such as hyperparathyroidism, hemachromatosis, rheumatoid arthritis, etc. is a collagen vascular disease of unknown etiology otherwise known as progressive systemic sclerosis. There is a generalized disorder of the microvasculature which causes and vascular compromise of the skin and other organ systems. It is three to four times more common in women than men.</p>
	    
	</Tab.Pane> },

    { menuItem: 'Distribution', render: () =>
	<Tab.Pane>
	    <Image src="orig/oa500.gif" floated='left' />
	    <table border="1">
		<tr> 
		    <th width="200" class="joint">Joint</th>
		    <th width="100" class="joint">Frequency</th>
		    <th>&nbsp;</th>
		</tr>
		<tr> 
		    <td class="joint">DIP</td>
		    <td class="freq">+++</td>
		    <td><Image src="orig/oadip.jpg" width="94" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">1st IP</td>
		    <td class="freq">+++</td>
		    <td><Image src="orig/oa1stip.jpg" width="89" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th PIP</td>
		    <td class="freq">++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">1st MCP</td>
		    <td class="freq">++</td>
		    <td><Image src="orig/oamcp.jpg" width="135" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">2nd-5th MCP</td>
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">1st CMC</td>
		    <td class="freq">++</td>
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
		    <td class="freq">-</td>
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
  <ol>
    <li> eMedicine, Radiology section.<br />
      <a href="http://www.emedicine.com/radio/topic492.htm">http://www.emedicine.com/radio/topic492.htm</a></li>
    <li>CRWU<br/>
      <a href="http://www.uhrad.com/msiarc/msi046.htm">http://www.uhrad.com/msiarc/msi046.htm</a><br />
    </li>
    <li>Indiana University<br />
      <a href="http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set4/case2/page.htm">http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set4/case2/page.htm</a></li>
    <li>Faculté de Médecine de Rennes<br />
      <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1432%2B">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1432+</a><br />
      <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1610%2B%20">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1610+ 
      </a></li>
  </ol>

	</Tab.Pane> },
    { menuItem: 'References', render: () =>
	<Tab.Pane>
    <ol class="reflist">
      <li>:Harris PA, Hart DJ, Dacre JE, Huskisson EC, Spector TD.<br />
        <b>The progression of radiological hand osteoarthritis over ten years: 
        a clinical follow-up study.</b><br />
        <i><a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11550709&dopt=Abstract">Osteoarthritis 
        Cartilage. 1994 Dec;2(4):247-52</a></i><a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11550709&dopt=Abstract">.</a><br />
      </li>
      <li>:Sowers M, Lachance L, Hochberg M, Jamadar D. Related Articles <br />
        <b>Radiographically defined osteoarthritis of the hand and knee in young 
        and middle-aged African American and Caucasian women</b>. <br />
        <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10772235&dopt=Abstract"><i>Osteoarthritis 
        Cartilage. 2000 Mar;8(2):69-77.</i></a> <br />
      </li>
    </ol>

	</Tab.Pane> },
    
]

const OA = () => <Tab panes={panes} />

export default OA
