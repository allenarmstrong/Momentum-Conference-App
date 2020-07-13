$('#user_create').unbind('submit').submit(function(e){
					e.preventDefault();
							
							var getUserID = fdata.getResourceData({
								resource: resource,
								type: 'query',
								query: "INSERT INTO users SET first_name='create_fname',last_name='create_lname',company='create_company',position='create_position',phone='create_phone',email='create_login'";,
								callback: function(data){
									
								}
							});
							
						}
					
					return false;
				});