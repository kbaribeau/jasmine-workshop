<%@taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>

<%@page import="com.gale.reader.portlet.utils.Param"%>

<portlet:resourceURL var="addDocumentToReaderUrl" id="addDocumentToReader">
</portlet:resourceURL>

<portlet:resourceURL var="getAddToReadersDropdownOptionsUrl" id="getDropdownOptionsForAddToReader">
</portlet:resourceURL>

<script type="text/javascript" src="<%=request.getContextPath()%>/js/addToReaderShared.js" ></script>

<div id="addDocumentToReaderDiv" style="display:none;">
	<div id="addToReader-documentToBeAddedText"></div>

	<div id="addToReader-messageArea"></div>
	
	<div id="addToReader-addDocumentToReaderDiv-readerDropdownArea"  style="margin-bottom: 25px;"></div>
	
	<div id="addToReader-hideNewReaderInputs">Create New Reader</div>
	
	<div id="addToReader-newReaderFormDiv" style="display: none;">
		Title <span class="required_wrap">(Required)</span>: <br /><input id="addToReader-readerName" value="" maxLength="255" class="required lightboxTextArea"/>
		<br />
		Description: <br /> <textarea id="addToReader-readerDescription" class="lightboxTextArea"></textarea>
	</div>
	
	<input id="addToReader-assetId" type="hidden" value=""/>
	
	<br />
	
	<input id="add" type="button" value="Add Document" 
		onclick="addToReaderShared.sendAddReaderPostRequest(
			document.getElementById('headnoteDropDown'),
			document.getElementById('quizDropDown'))"/>
</div>

<!-- IMPORTANT -->
<script type="text/javascript">
	addToReaderShared = new AddToReaderShared('${addDocumentToReaderUrl}','${getAddToReadersDropdownOptionsUrl}');
</script>

<!-- /IMPORTANT -->
