let fileTypes = [{
    name: 'image',
    types: ['jpg', 'jpeg', 'svg', 'png', 'webp', 'tiff', 'psd', 'ai', 'wmf', 'emf', 'ico'],
    bgColor: '#FE7D49',
    image: "image.png"
}, {
    name: 'text file',
    types: ['doc', 'docx', 'otd', 'pdf', 'rtf', 'tex', 'txt', 'wpd', 'prn', 'dif', 'csv', 'slk'],
    bgColor: '#FFA805',
    image: "text.png"
}, {
    name: 'animated image',
    types: ['gif', 'apng', 'avif'],
    bgColor: '#FF5AE5',
    image: "animation.png"
}, {
    name: 'video',
    types: ['mp4', 'mov', 'wmv', 'avi', 'avchd', 'flv', 'f4v', 'swf', 'mkv', 'webm'],
    bgColor: '#FF6B6B',
    image: "video.png"
}, {
    name: 'web-page',
    types: ['html', 'xhtml', 'htm', 'mht', 'mhtml'],
    bgColor: '#B5E08C',
    image: "website.png"
}, {
    name: 'audio',
    types: ['mp3', 'm4a', 'flac', 'wav', 'wma', 'aac'],
    bgColor: '#FFBB61',
    image: "audio.png"
}, {
    name: 'code',
    types: ['js', 'php', 'c', 'cgi', 'cs', 'h', 'java', 'py', 'exe', 'apk'],
    bgColor: '#444444',
    image: "code.png"
}, {
    name: 'stylesheet',
    types: ['css', 'scss'],
    bgColor: '#E34B87',
    image: "stylesheet.png"
}, {
    name: 'presentation',
    types: ['pptx', 'pptm', 'ppt'],
    bgColor: '#FF4A10',
    image: "presentation.png"
}, {
    name: 'e-sheet',
    types: ['xls', 'xlsm', 'xlsb', 'xltx', 'xlt', 'xlsx'],
    bgColor: '#28A265',
    image: "sheets.png"
}, {
    name: 'database',
    types: ['itw', 'mar', 'accdc', 'accdb', 'trm', 'teacher', 'te', 'itdb', 'pdb', 'sqlite', 'nyf', 'mdf', 'db', 'accde', 'accdt', 'sql', 'odb', 'btr', 'sd8'],
    bgColor: '#57A3FF',
    image: "database.png"
}, {
    name: '3D model',
    types: ['stl', 'obj', 'fbx', 'dae', 'blend', 'abc', 'usd', 'ply', 'stl', '3mf'],
    bgColor: '#FFDA2D',
    image: "3d.png" //93 file types
}, {
    name: 'archive',
    types: ['zip', 'rar', '7z', 'tar', 'mint', 'htmi', 'mpkg', 'ice', 'r2', 'b1', 'sqx'],
    bgColor: '#E0C38C',
    image: 'archive.png'
}, {
    name: 'computer label',
    types: ['lnk'], 
    bgColor: '#8CC7E0',
    image: 'computer-label.png'
}]

let input = '#file-choose';
let button = '#file-check';

let fileName = '';
let formatOfFile = '';

let isThereAnyThis = (format, mas) => {
    for (let i = 0; i != mas.length; i++) {
        for (let j = 0; j != mas[i].types.length; j++) {
            if (fileTypes[i].types[j] === format) {
                return true
            }
        }
    }
    return false
}

$(button).click(function () {
    fileName = $(input).val().toLowerCase();
    let indexOfDot = fileName.lastIndexOf('.');
    formatOfFile = fileName.slice(indexOfDot + 1);
    if (isThereAnyThis(formatOfFile, fileTypes)) {
        for (let i = 0; i != fileTypes.length; i++) {
            for (let j = 0; j != fileTypes[i].types.length; j++) {
                if (fileTypes[i].types[j] === formatOfFile) {
                    $('#alert').css({
                        'display': 'flex',
                        'background': fileTypes[i].bgColor
                    });
                    $('#this-is').html(fileTypes[i].name)
                    $('#file-extension').html('.' + fileTypes[i].types[j])
                    $(input).css({
                        'background': 'transparent url("./images/addFile.svg") no-repeat no-repeat center center',
                        'backgroundSize': 'contain'
                    });
                    $('#alert-icon').attr('src', './images/' + fileTypes[i].image)
                    setTimeout(function () {
                        $('#alert').hide(400);
                    }, 5000)
                    $(input).val('');
                    break;
                }
            }
        }
    } else if (formatOfFile === '') {
        $(input).css('animation', 'move-min 0.3s 3 linear');
        setTimeout(() => {
            $(input).css('animation', '');
        }, 900);
    } else {
        $('#alert').css({
            'display': 'flex',
            'background': '#333333'
        });
        $('#this-is').html('unknown file');
        $('#file-extension').html('.' + formatOfFile)
        $(input).css({
            'background': 'transparent url("./images/addFile.svg") no-repeat no-repeat center center',
            'backgroundSize': 'contain'
        });
        $('#alert-icon').attr('src', './images/favicon.ico');
        setTimeout(function () {
            $('#alert').hide(400);
        }, 5000);
        $(input).val('');
    }
});

$(input).change(function () {
    $(input).css({
        'background': 'transparent url("./images/addFileComplete.svg") no-repeat no-repeat center center',
        'backgroundSize': 'contain'
    })
})