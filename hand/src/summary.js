import React from 'react'
import { Image } from 'semantic-ui-react'

const Summary = () =>
<div>
    <table width="900" border="1" cellspacing="2" cellpadding="5" bordercolor="#000000" bgcolor="#FFFFFF">
	<thead>
	    <tr> 
		<th>&nbsp;</th>
		<th>DIP</th>
		<th>1st IP</th>
		<th>2nd-5th PIP</th>
		<th>1st MCP</th>
		<th>2nd-5thMCP</th>
		<th>1stCMC</th>
		<th>2nd-5th CMC</th>
		<th>Mid Carpal</th>
		<th>Radio-Carpal</th>
		<th>Radio-Ulnar</th>
	    </tr>
	</thead>
	<tbody>
	    <tr> 
		<td><a href="oa.htm"><Image src="orig/oa100.gif" width="55" height="100" /><br />
		    OA</a></td>
		<td><Image src="orig/oadip.jpg" width="94" height="100" align="top" alt="Osteoarththitis" /><br />
		+++</td>
		<td><Image src="orig/oa1stip.jpg" width="89" height="100" alt="Osteoarththitis" /><br />
		+++</td>
		<td>++</td>
		<td>+++</td>
		<td>+</td>
		<td>++</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	    </tr>
	    <tr> 
		<td><a href="ra.htm"><Image src="orig/ra100.gif" width="55" height="100" /><br />
		    RA</a></td>
		<td>-</td>
		<td>++</td>
		<td> 
		    <div align="center"><Image src="orig/rapip.jpg" width="115" height="100" alt="Rheumatoid Arthritis" /><br />
		    ++</div>
		</td>
		<td><Image src="orig/ra1stmcp.jpg" width="91" height="100" alt="Rheumatoid Arthritis" /><br />
		+++</td>
		<td><Image src="orig/ramcp.jpg" width="107" height="100" alt="Rheumatoid Arthritis" /><br />
		+++</td>
		<td><Image src="orig/ra1stcmc.jpg" width="91" height="100" alt="Rheumatoid Arthritis" /><br />
		++</td>
		<td><Image src="orig/rawristcmc.jpg" width="154" height="100" alt="Rheumatoid Arthritis" /><br />
		+++</td>
		<td colspan="2"> 
		    <div align="center"><Image src="orig/rawrist.jpg" width="147" height="100" alt="Rheumatoid Arthritis" /><br />
		    +++</div>
		</td>
		<td> 
		    <div align="center"><Image src="orig/raru.jpg" width="91" height="100" alt="Rheumatoid Arthritis" /><br />
		    +++</div>
		</td>
	    </tr>
	    <tr> 
		<td><a href="Psoriasis.htm"><Image src="orig/Handwrist100.gif" width="55" height="100" /><br />
		    Psoriasis</a></td>
		<td><Image src="orig/psoriasispip.jpg" width="111" height="100" alt="Psoriasis" />+++</td>
		<td><Image src="orig/psoriasisdip.jpg" width="106" height="100" alt="Psoriasis" /><br />
		+++</td>
		<td><Image src="orig/psoriasispip.jpg" width="111" height="100" alt="Psoriasis" /><br />
		+++</td>
		<td><Image src="orig/psoriasis1stmcp.jpg" width="108" height="100" alt="Psoriasis" /><br />
		++</td>
		<td><Image src="orig/psoriasismcp.jpg" width="110" height="100" alt="Psoriasis" /><br />
		++</td>
		<td>++</td>
		<td>++</td>
		<td>+</td>
		<td>+</td>
		<td>+</td>
	    </tr>
	    <tr> 
		<td><a href="gout.htm"><Image src="orig/Handwrist100.gif" width="55" height="100" /><br />
		    Gout</a></td>
		<td>++</td>
		<td><Image src="orig/goutdip.jpg" width="103" height="100" alt="Gout" /><br />
		++</td>
		<td><Image src="orig/goutpip.jpg" width="109" height="100" alt="Gout" /><br />
		++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
	    </tr>
	    <tr> 
		<td><a href="CPPD.htm"><Image src="orig/cppd100.gif" width="55" height="100" /><br />
		    CPPD</a></td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>+</td>
		<td><Image src="orig/cppdmcp2.jpg" width="97" height="100" alt="CPPD" /><br />
		+++</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td><Image src="orig/cppdwrist.jpg" width="138" height="100" alt="CPPD" /><br />
		+++</td>
		<td>-</td>
	    </tr>
	    <tr> 
		<td><a href="Hemo.htm"><Image src="orig/cppd100.gif" width="55" height="100" /><br />
		    Hemochromatosis</a></td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td><Image src="orig/hemocrommcp.jpg" width="88" height="100" alt="Hemochromatosis" /><br />
		+++</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>+++</td>
		<td>-</td>
	    </tr>
	    <tr> 
		<td><a href="mrh.htm"><Image src="orig/Handwrist100.gif" width="55" height="100" /><br />
		    Mult.Ret.Hist.</a></td>
		<td>++</td>
		<td><Image src="orig/mripip.jpg" width="110" height="100" /><br />
		++</td>
		<td>++</td>
		<td>++</td>
		<td><Image src="orig/mrimcp.jpg" width="88" height="100" /><br />
		++</td>
		<td><Image src="orig/mri1stmcp.jpg" width="87" height="100" /><br />
		++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
	    </tr>
	    <tr> 
		<td><a href="Sarcoidosis.htm"><Image src="orig/sarcoid100.gif" width="57" height="100" /><br />
		    Sarcoidosis</a></td>
		<td>&nbsp;</td>
		<td><Image src="orig/sarcoidosisdip&#32;copy.jpg" width="101" height="100" /></td>
		<td><Image src="orig/sarcoidosispip&#32;copy.jpg" width="101" height="100" /></td>
		<td>&nbsp;</td>
		<td><Image src="orig/sarcoidossmcp.jpg" width="101" height="100" /></td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	    </tr>
	    <tr> 
		<td><a href="Scleroderma.htm"><Image src="orig/scleroderma100.gif" width="55" height="100" /><br />
		    Scleroderma</a></td>
		<td><Image src="orig/sclerodermatuft.jpg" width="109" height="100" alt="Scleroderma - Tuft reabsorption" />++</td>
		<td>+</td>
		<td>-</td>
		<td>+</td>
		<td>-</td>
		<td>+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	    </tr>
	    <tr> 
		<td><a href="silastic.htm"><Image src="orig/silastic100.gif" width="55" height="100" /><br />
		    Silastic</a></td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>+</td>
		<td>++</td>
		<td><Image src="orig/silasticwrist.jpg" width="108" height="100" /><br />
		++</td>
		<td>-</td>
	    </tr>
	    <tr> 
		<td> 
		    <p><a href="Septic.htm"><Image src="orig/Handwrist100.gif" width="55" height="100" /><br />
		       Septic</a></p>
		</td>
		<td><Image src="orig/septicdip.jpg" width="108" height="100" /><br />
		++</td>
		<td><br />
		++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
		<td>++</td>
	    </tr>
	</tbody>
	<tfoot>
	    <tr>
		<th>&nbsp;</th>
		<th>DIP</th>
		<th>1st IP</th>
		<th>PIP</th>
		<th>1stMCP</th>
		<th>2nd-5thMCP</th>
		<th>1stCMC</th>
		<th>2nd-5th CMC</th>
		<th>Mid Carpal</th>
		<th>Radio-Carpal</th>
		<th>Radio-Ulnar</th>
	    </tr>
	</tfoot>
    </table>

</div>;

export default Summary
