
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/rcadiente/Desktop/projects/PROVEST/conf/routes
// @DATE:Tue Jul 10 09:14:21 PHT 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
