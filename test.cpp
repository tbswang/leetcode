#include <iostream>
using namespace std;

int main()
{
  int base = 1;
  if (base > 15 / 10 || (base == 15 / 10 && 1 - '0' > 7))
  {
    cout << 'a';
    cout << base;
  }
  cout << "finished";
  cout << 'a' - '0';
  cout << endl;
}