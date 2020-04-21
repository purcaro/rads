import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/sclerodermap4191199.jpg" floated="left" />
	    <h3>Scleroderma</h3>
	    <p>A collagen vascular disease of unknown etiology otherwise known as progressive 
		systemic sclerosis. There is a generalized disorder of the microvasculature 
		which causes and vascular compromise of the skin and other organ systems. 
	    It is three to four times more common in women than men.</p>
	    
	    <h3>Distribution:</h3>
	    <p>The distal phalangeal tips, interphalangeal joints and surrounding soft tissues 
		areas of the hand are the most commonly affected areas. There can also be 
		preferential involvement of the 1st carpometacarpal joint. Much less frequently 
	    seen are radiographic changes at the other carpal bones. </p>
	    
	    <h3>Radiographic Findings:</h3>
	    <p>Acroosteolysis can occur due to resorptive changes at the distal phlangeal 
		tufts secondary to pressure from surrounding sclerotic soft tissues. The resorptive 
		process often causes a sharpening of the phalanx, known as &quot;penciling&quot;. 
		The interphalangeal joints can also exhibit erosive changes; joint space narrowing 
		is usually a late stage finding. Occasionally tendon sheath fibrosis can cause 
		contracture deformities. Radiographic findings associated with the preferential 
		involvement of the 1st carpometacarpal joint can include osteolysis of the 
		trapezium and 1st metacarpal base, 1st metacarpal subluxation, and and intra-articular 
		calcifications. Soft tissue subcutaneous and periarticular calcifications 
	    and soft tissue atrophy and thickening are common findings in scleroderma.</p>

	    <h3>Differential:</h3>
	    <p>Rheumatoid, psoriatic, and erosive arthritis can sometimes be mistakenly diagnosed 
		in place of scleroderma. However, scleroderma has fairly characteristic associated 
		soft tissue findings which distinguish it from the others.
	    </p>	    
	</Tab.Pane> },

    { menuItem: 'Distribution', render: () =>
	<Tab.Pane>
	    <Image src="orig/scleroderma500.gif" floated="left" />  
	    <table border="1">
		<tr>
		    <th width="200" class="joint">Joint</th>
		    <th width="100" class="joint">Frequency</th>
		    <th>&nbsp;</th>
		</tr>
		<tr>
		    <td class="joint">Tuft</td>
		    <td class="freq">
			+++
		    </td>
		    <td><Image src="orig/sclerodermatuft.jpg" width="271" height="250" /></td>
		</tr>
		<tr>
		    <td class="joint">DIP</td>
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr>
		    <td class="joint">1st PIP</td>
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
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr>
		    <td class="joint">2nd-5th MCP</td>
		    <td class="freq">-</td>
		    <td>&nbsp;</td>
		</tr>
		<tr>
		    <td class="joint">1st CMC</td>
		    <td class="freq">+</td>
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
	    <ol class="linklist">
		<li> eMedicine, Rheumatology section.<br />
		<a href="http://www.emedicine.com/med/topic2076.htm">http://www.emedicine.com/med/topic2076.htm</a></li>
		<li>CRWU<br />
		    <a href="http://www.uhrad.com/msiarc/msi053.htm">http://www.uhrad.com/msiarc/msi053.htm</a><br />
		    <a href="http://www.uhrad.com/msiarc/msi048.htm">http://www.uhrad.com/msiarc/msi048.htm</a> 
		    </li>
		<li>Indiana University<br />
		    <a href="http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set4/case4/page.htm">http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set4/case4/page.htm</a> 
		    </li>
		    <li>Amiga Radiologist<br />
			<a href="http://www.octet.com/~mikety/Answers/scleroderm.html">http://www.octet.com/~mikety/Answers/scleroderm.htm</a>l 
			</li>
			<li>Faculté de Médecine de Rennes<br />
			    <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1535">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1535 
			    </a></li>
		    </ol>

		</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>
	    <ol class="reflist">
		<li>Misra R, Darton K, Jewkes RF, Black CM, Maini RN.<br />
		    <b><i>Arthritis in scleroderma</i></b>.<br />
		    <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=PubMed&amp;list_uids=7582722&amp;dopt=Abstract">Br 
		    J Rheumatol. 1995 Sep;34(9):831-7.</a></li>
		<li>Silver TM, Farber SJ, Bole GG, Martel W.<br />
		    <i><b>Radiological features of mixed connective tissue disease and scleroderma--systemic 
		       lupus erythematosus overlap.</b></i><br />
		    <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=PubMed&amp;list_uids=935473&amp;dopt=Abstract">Radiology. 
		    1976 Aug;120(2):269-75.</a><br />
		    <br />
		</li>
	    </ol>
	</Tab.Pane> },
    
]

const Scleroderma = () => <Tab panes={panes} />

export default Scleroderma
