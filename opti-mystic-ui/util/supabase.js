const {createClient} = require("@supabase/supabase-js")

const supabase = createClient(
	"https://twoiypbxxgynzsosvpuj.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3b2l5cGJ4eGd5bnpzb3N2cHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5ODYwMTMsImV4cCI6MTk5OTU2MjAxM30.6txH8P3SIk0RlWvbpU7oTmtHY_jiyFiZwfO5OzJV9aM"
)

module.exports = {supabase}
