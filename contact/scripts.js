function enterComment(newid,callback) {
                           callback(newid);
                            var x = document.createElement("INPUT");
                            x.setAttribute("type", "text");
                            x.setAttribute("class", "comment");
                            x.setAttribute("id", newid);
                            document.getElementById("comment_section").appendChild(x);

                            y=document.getElementById("com_button");
                            y.innerHTML="Comment here ->";
                            return false;
                                            }

                          function clear_comment(id){
                            
                            if(document.getElementById(id)){
                                var comment= document.getElementById(id);
                                comment.parentNode.removeChild(comment);
                                document.getElementById(id).remove();
                                console.log("Comment removed");
                    
                                }
                           
                            }

                            function display_text(id){
                                var x = document.getElementById(id);
                                x.value="Value Of: '"+x.value+ "' recived!";
                                x.style.backgroundColor="white";
                                x.style.color="red";
                                x.style.width="200px";
                                x.style.borderStyle='none';
                                return false;

                            }