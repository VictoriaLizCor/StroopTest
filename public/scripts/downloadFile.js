function downloadFile(csv, filename){
    var file;
    var downloadLink;
    //retrieve file fro experiment
    
	// Download csv type file
    //file  = new Blob([csv], {type: 'text/csv;charset=utf-8'});
	//download simple text
	file  = new Blob([csv], {type: 'text/plain;charset=utf-8'});
    downloadLink = document.createElement('a');

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(file);

    downloadLink.style.display = 'none';

    document.body.appendChild(downloadLink);

    downloadLink.click();
}