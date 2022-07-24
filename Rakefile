task "assets:precompile" do
  exec("jekyll build")
end

task "serve:localhttps" do 
	exec("jekyll serve --ssl-key  config/local-cert/localhost-key.pem --ssl-cert config/local-cert/localhost.pem")	
end